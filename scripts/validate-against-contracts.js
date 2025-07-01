const fs = require('fs');
const path = require('path');
const { Validator } = require('jsonschema');
const catalog = require('../catalog/index.js');

// Cesta ke schématu z contracts
const schemaPath = path.resolve(__dirname, '../../mcp-prompts-contracts/prompt.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

const v = new Validator();
let hasError = false;

for (const category of catalog.getCategories()) {
  for (const name of catalog.listPrompts(category)) {
    const prompt = catalog.loadPrompt(name, category);
    // Validujeme pouze pokud prompt vypadá jako objekt (má např. 'name' a 'template')
    if (prompt && typeof prompt === 'object' && prompt.name && (prompt.template || prompt.content)) {
      const result = v.validate(prompt, schema);
      if (!result.valid) {
        hasError = true;
        console.error(`\x1b[31m[Schema Error]\x1b[0m ${category}/${name}`);
        for (const err of result.errors) {
          console.error(`  - ${err.stack}`);
        }
      } else {
        console.log(`Valid: ${category}/${name}`);
      }
    } else {
      console.log(`Skipped (not structured prompt): ${category}/${name}`);
    }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log('All structured prompts are valid against contracts schema!');
} 