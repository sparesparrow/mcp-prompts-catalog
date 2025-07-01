# MCP Prompts Catalog

> **Poznámka (cs):** Katalog nyní podporuje prompty ve formátech JSON, YAML, TXT a MD. Loader automaticky rozpozná a načte správný formát.

A curated collection of prompts and templates for the MCP ecosystem. This package is part of the MCP Prompts monorepo and serves as the single source of truth for all default prompts and sequences.

## Installation

```bash
npm install @sparesparrow/mcp-prompts-catalog
```

## Usage

You can import or require prompts and catalog utilities from this package in your MCP-compatible projects:

```js
const {
  getPromptsDir,
  getCategories,
  listPrompts,
  loadPrompt,
} = require('@sparesparrow/mcp-prompts-catalog');

console.log(getPromptsDir()); // Absolute path to the prompts directory
console.log(getCategories()); // [ 'general', 'code-review', ... ]
console.log(listPrompts('general')); // [ 'development-system-prompt', 'task-list-helper', ... ]
console.log(loadPrompt('development-system-prompt', 'general'));
```

## Category Structure

Prompts are organized by category:

```
prompts/
  general/
    development-system-prompt.json
    task-list-helper.json
  code-review/
    ...
  ...
```

## Supported prompt formats

You can store prompts in the following formats:
- `.json` (recommended for structured prompts)
- `.yaml` / `.yml` (YAML, for readable structured prompts)
- `.txt` (plain text prompt)
- `.md` (Markdown prompt)

The loader will automatically detect the file extension and parse the prompt accordingly. All formats are converted to a unified object for further processing.

### Example: Adding a new prompt

- **JSON**: `my-prompt.json`
- **YAML**: `my-prompt.yaml`
- **Plain text**: `my-prompt.txt`
- **Markdown**: `my-prompt.md`

Place your file in the appropriate category folder. The loader will find and parse it automatically.

### Example: YAML prompt

```yaml
name: my-yaml-prompt
description: Example YAML prompt
template: |
  This is a YAML prompt with a {{placeholder}}.
```

### Example: TXT prompt

```
This is a plain text prompt. You can use {{placeholders}} as well.
```

## Adding or Updating Prompts

- All prompt JSON files are managed in this package under the `prompts/` directory, organized by category.
- To add a new prompt, create a new JSON file in the appropriate category directory and follow the existing schema.
- To update a prompt, edit the corresponding JSON file and submit a pull request.

## Testing

To test that the catalog package works after extraction, run a simple Node.js script:

```js
const { prompts } = require('@sparesparrow/mcp-prompts-catalog');
console.log(prompts['development-system-prompt']);
```

Or, for TypeScript:

```ts
import { prompts } from '@sparesparrow/mcp-prompts-catalog';
console.log(prompts['development-system-prompt']);
```

This should print the prompt object to the console.

## Contributing

Contributions are welcome! Please see the main repository's [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

MIT

## TODO

- [ ] Rozšířit loader o podporu více formátů promptů (JSON, YAML, TXT, MD)
- [ ] Otestovat načítání promptů ve všech podporovaných formátech
- [ ] (Volitelné) Přidat podporu pro CSV, XML, další formáty
