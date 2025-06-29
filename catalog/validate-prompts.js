const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const promptsDir = path.join(__dirname, 'prompts');
const schema = require('./schemas/prompt.schema.json');
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);
const validate = ajv.compile(schema);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      yield fullPath;
    }
  }
}

let hasError = false;
let hasPlaceholderError = false;
function extractPlaceholders(content) {
  const regex = /\{\{\s*([a-zA-Z0-9_\-]+)\s*\}\}/g;
  const found = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    found.add(match[1]);
  }
  return found;
}

for (const file of walk(promptsDir)) {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  if (!validate(data)) {
    hasError = true;
    console.error(`Validation failed for ${file}:`);
    console.error(validate.errors);
  } else {
    // Kontrola placeholderů
    const content = data.content || '';
    const variables = Array.isArray(data.variables)
      ? data.variables.map(v => (typeof v === 'string' ? v : v.name)).filter(Boolean)
      : [];
    const placeholders = Array.from(extractPlaceholders(content));
    // Najdi placeholdery, které nejsou ve variables
    const missingInVariables = placeholders.filter(p => !variables.includes(p));
    // Najdi variables, které nejsou v content
    const unusedVariables = variables.filter(v => !placeholders.includes(v));
    if (missingInVariables.length > 0) {
      hasPlaceholderError = true;
      console.error(`\x1b[31m[Placeholder Error]\x1b[0m V promptu ${file} jsou placeholdery, které nejsou uvedeny v 'variables': ${missingInVariables.join(', ')}`);
    }
    if (unusedVariables.length > 0) {
      hasPlaceholderError = true;
      console.error(`\x1b[33m[Placeholder Warning]\x1b[0m V promptu ${file} jsou proměnné ve 'variables', které nejsou použity v 'content': ${unusedVariables.join(', ')}`);
    }
    if (!hasPlaceholderError) {
      console.log(`Valid: ${file}`);
    }
  }
}
if (hasError || hasPlaceholderError) {
  process.exit(1);
} else {
  console.log('All prompts are valid!');
}
