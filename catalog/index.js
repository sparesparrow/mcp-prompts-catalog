const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Use require.resolve to get the actual package location, then resolve prompts dir
const packageRoot = path.dirname(require.resolve('@sparesparrow/mcp-prompts-catalog/package.json'));
const promptsDir = path.join(packageRoot, 'prompts');

function getPromptsDir() {
  return promptsDir;
}

function getCategories() {
  return fs
    .readdirSync(promptsDir)
    .filter(f => fs.statSync(path.join(promptsDir, f)).isDirectory());
}

function listPromptFiles(category) {
  const catDir = path.join(promptsDir, category);
  if (!fs.existsSync(catDir)) return [];
  return fs
    .readdirSync(catDir)
    .filter(f =>
      f.endsWith('.json') ||
      f.endsWith('.yaml') ||
      f.endsWith('.yml') ||
      f.endsWith('.txt') ||
      f.endsWith('.md')
    );
}

function listPrompts(category) {
  // Vrací názvy promptů bez přípony
  return listPromptFiles(category).map(f => path.basename(f, path.extname(f)));
}

function loadPrompt(name, category) {
  const catDir = path.join(promptsDir, category);
  // Hledáme prompt ve všech podporovaných formátech
  const exts = ['.json', '.yaml', '.yml', '.txt', '.md'];
  for (const ext of exts) {
    const file = path.join(catDir, name + ext);
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf8');
        if (ext === '.json') return JSON.parse(data);
        if (ext === '.yaml' || ext === '.yml') return yaml.load(data);
        if (ext === '.txt' || ext === '.md') return { name, content: data };
      } catch (error) {
        if (error.code === 'ENOENT') return null;
        if (error instanceof SyntaxError) {
          console.error(`Invalid format in prompt file: ${file}`);
          return null;
        }
        throw error;
      }
    }
  }
  return null;
}

module.exports = {
  getPromptsDir,
  getCategories,
  listPrompts,
  loadPrompt,
};
