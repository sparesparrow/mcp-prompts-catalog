# MCP Prompts Catalog

This repository contains the official collection of prompt templates for the MCP Prompts ecosystem.

## Purpose

- Centralized, versioned catalog of high-quality prompt templates for use in MCP-compatible servers and clients.
- Ensures consistency, validation, and discoverability of prompts across the ecosystem.

## Prompt Structure

Each prompt is a JSON file with the following structure:

```json
{
  "id": "unique-prompt-id",
  "name": "Human-Readable Prompt Name",
  "description": "Brief description of the prompt's purpose",
  "content": "The actual prompt content with {{variables}}",
  "isTemplate": true,
  "variables": ["list", "of", "variable", "names"],
  "tags": ["relevant", "tags"],
  "createdAt": "2025-03-15T12:00:00.000Z",
  "updatedAt": "2025-03-15T12:00:00.000Z",
  "version": 1,
  "examples": [],
  "metadata": {}
}
```

- All prompts are validated against the JSON schema from `mcp-prompts-contracts`.
- Templates (`isTemplate: true`) must define `variables` and `examples`.

## Validation Workflow

- Use the script `catalog/validate-prompts.js` to validate all prompts for schema compliance, placeholder consistency, and quality checks (duplicate IDs, required examples, language correctness).

```bash
node catalog/validate-prompts.js
```

- For contract-level validation (against the latest schema from contracts):

```bash
node scripts/validate-against-contracts.js
```

- For automated fixing of missing required fields:

```bash
node scripts/fix-prompts.js
```

## Publishing to NPM

This package can be published to NPM as `@sparesparrow/mcp-prompts-catalog` for easy consumption by MCP servers and clients.

```bash
npm publish --access public
```

## CI/CD and Automation

- Planned: GitHub Actions for automatic validation, build, and publishing.
- Planned: Automated versioning based on data changes.

## Contributing

- Please follow the prompt structure and validation rules.
- Run validation scripts before submitting a pull request.
- See `TODO.md` for roadmap and open tasks.
