# MCP Prompts - Collection

This repository will contain the collection of prompts and templates.

## Validace placeholderů

Všechny prompty jsou automaticky kontrolovány na správnost placeholderů (např. {{variable}}) pomocí skriptu `catalog/validate-prompts.js`. Skript ověřuje, že všechny placeholdery v obsahu jsou uvedeny v poli `variables` a naopak. Při chybě validace je skript ukončen s chybou.

Pro spuštění validace použijte:

```bash
node catalog/validate-prompts.js
```

Součástí workflow je i kontrola proti JSON schématu a další kontroly kvality (duplicitní id, povinné příklady, jazyková správnost) budou postupně doplňovány.
