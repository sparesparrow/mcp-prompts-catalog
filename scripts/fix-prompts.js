const fs = require('fs');
const path = require('path');

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

function nowISO() {
  return new Date().toISOString();
}

function fixPrompt(data, file) {
  let changed = false;
  // Povinná pole
  const required = {
    id: path.basename(file, '.json'),
    name: 'Prompt',
    description: 'Prompt description',
    content: '',
    tags: [],
    createdAt: nowISO(),
    updatedAt: nowISO(),
    version: 1
  };
  for (const key of Object.keys(required)) {
    if (typeof data[key] === 'undefined') {
      data[key] = required[key];
      changed = true;
    }
  }
  // Šablony: examples a variables
  if (data.isTemplate) {
    if (typeof data.examples === 'undefined') {
      data.examples = [];
      changed = true;
    }
    if (typeof data.variables === 'undefined') {
      data.variables = [];
      changed = true;
    }
  }
  return changed;
}

for (const file of getPromptFiles(promptsDir)) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch (e) {
    console.error('Chyba při čtení/parsing:', file);
    continue;
  }
  if (fixPrompt(data, file)) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
    console.log('Opraveno:', file);
  }
}
console.log('Automatická oprava promptů dokončena.'); 