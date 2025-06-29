const fs = require('fs');
const path = require('path');
const { Validator } = require('jsonschema');

// Cesta ke schématu z contracts
const schemaPath = path.resolve(__dirname, '../../mcp-prompts-contracts/prompt.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

// Cesta ke katalogu promptů
const promptsDir = path.resolve(__dirname, '../prompts');

function getPromptFiles(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      files = files.concat(getPromptFiles(path.join(dir, entry.name)));
    } else if (entry.name.endsWith('.json') && entry.name !== 'README.md') {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const v = new Validator();
let hasError = false;

for (const file of getPromptFiles(promptsDir)) {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const result = v.validate(data, schema);
  if (!result.valid) {
    hasError = true;
    console.error(`\x1b[31m[Schema Error]\x1b[0m ${file}`);
    for (const err of result.errors) {
      console.error(`  - ${err.stack}`);
    }
  } else {
    console.log(`Valid: ${file}`);
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log('All prompts are valid against contracts schema!');
} 