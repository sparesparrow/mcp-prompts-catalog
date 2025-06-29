# MCP Prompts Collection - TODO

## Úkoly pro migraci a vývoj

### Fáze 1: Základní nastavení
- [ ] Vytvořit package.json s potřebnými závislostmi
- [ ] Nastavit validaci JSON schémat
- [ ] Přidat závislost na mcp-prompts-contracts
- [ ] Vytvořit build skripty

### Fáze 2: Validace a Kvalita
- [x] Implementovat validaci všech promptů proti JSON schématu
- [x] Přidat automatické kontroly placeholderů v prompty
- [ ] Přidat automatické kontroly kvality promptů (duplicitní id, jazyková správnost, povinné příklady)
- [ ] Vytvořit nástroje pro kontrolu placeholders (hotovo v rámci validace)
- [ ] Implementovat kontrolu duplicitních promptů podle id a obsahu
- [ ] Kontrola, že všechny prompty mají pole examples (pokud je vyžadováno schématem)
- [ ] Kontrola jazykové správnosti popisu a obsahu (volitelné)

### Fáze 3: Katalog Systém
- [ ] Vylepšit katalog index systém
- [ ] Přidat vyhledávání a filtrování
- [ ] Implementovat kategorizaci promptů
- [ ] Vytvořit API pro přístup ke katalogu

### Fáze 4: CI/CD Pipeline
- [ ] Nastavit GitHub Actions pro validaci
- [ ] Přidat automatické kontroly kvality
- [ ] Konfigurovat publikování NPM balíčku
- [ ] Nastavit versioning založený na změnách dat

### Fáze 5: Dokumentace
- [ ] Vytvořit dokumentaci pro každou kategorii promptů
- [ ] Přidat příklady použití
- [ ] Vytvořit průvodce pro přidávání nových promptů
- [ ] Dokumentovat katalog API

### Fáze 6: Testování
- [ ] Vytvořit testy pro validaci promptů
- [ ] Přidat testy pro katalog systém
- [ ] Otestovat kompatibilitu s implementacemi 