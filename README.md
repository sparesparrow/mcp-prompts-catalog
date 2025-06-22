# MCP Prompts Collection

Tento repozitář obsahuje kompletní sbírku promptů a katalogů pro MCP Prompts ekosystém. Slouží jako centrální úložiště všech promptů, šablon a workflow definic.

## Účel

- **Prompt Sbírka**: Obsahuje všechny prompty a šablony
- **Katalog Systém**: Poskytuje strukturovaný přístup k promptům
- **Workflow Definice**: Obsahuje definice workflow procesů
- **Šablony**: Poskytuje šablony pro různé use cases

## Struktura

```
├── prompts/           # Hlavní sbírka promptů
│   ├── code-review/   # Prompty pro code review
│   ├── data-analysis/ # Prompty pro analýzu dat
│   ├── general/       # Obecné prompty
│   └── ...           # Další kategorie
└── catalog/          # Katalog systém
    ├── prompts/      # Strukturovaný katalog
    ├── schemas/      # JSON schémata
    └── index.js      # Katalog index
```

## Použití

Tento balíček je závislostí pro všechny implementace MCP Prompts:
- mcp-prompts-ts (TypeScript)
- mcp-prompts-rs (Rust)
- mcp-prompts-pg (PostgreSQL)
- mcp-prompts-aidl (Android)

## Instalace

```bash
npm install @sparesparrow/mcp-prompts-collection
```

## Vývoj

```bash
npm install
npm run validate  # Validace všech promptů
npm test
```

## Kategorie Promptů

- **Code Review**: Prompty pro automatické code review
- **Data Analysis**: Prompty pro analýzu dat a reportování
- **Development**: Prompty pro vývoj a debugging
- **Project Management**: Prompty pro správu projektů
- **General**: Obecné prompty pro různé účely
