# MCP Prompts Collection - TODO

## Úkoly pro migraci a vývoj

### Fáze 1: Základní nastavení
- [x] Vytvořit package.json s potřebnými závislostmi
- [x] Nastavit validaci JSON schémat
- [x] Přidat závislost na mcp-prompts-contracts
- [x] Vytvořit build skripty

### Fáze 2: Validace a Kvalita
- [x] Implementovat validaci všech promptů proti JSON schématu
- [x] Přidat automatické kontroly placeholderů v prompty
- [x] Přidat automatické kontroly kvality promptů (duplicitní id, jazyková správnost, povinné příklady)
- [x] Vytvořit nástroje pro kontrolu placeholders (hotovo v rámci validace)
- [x] Implementovat kontrolu duplicitních promptů podle id a obsahu
- [x] Kontrola, že všechny prompty mají povinné vlastnosti (createdAt, updatedAt, examples)
- [x] Opravit data v prompt souborech dle výstupu validace

### Fáze 3: Synchronizace a automatizace
- [ ] Automatizovat kontrolu, že všechny prompty odpovídají aktuálnímu schématu z contracts
- [ ] Přidat testy, které ověří, že schémata odpovídají reálným datům z katalogu
- [ ] Nastavit GitHub Actions pro automatickou validaci a build

### Fáze 4: Dokumentace a onboarding
- [ ] Zlepšit dokumentaci a onboarding pro přispěvatele
- [ ] Přidat příklady použití a návody

### Fáze 5: Katalog Systém
- [ ] Vylepšit katalog index systém
- [ ] Přidat vyhledávání a filtrování
- [ ] Implementovat kategorizaci promptů
- [ ] Vytvořit API pro přístup ke katalogu

### Fáze 6: CI/CD Pipeline
- [ ] Nastavit GitHub Actions pro validaci
- [ ] Přidat automatické kontroly kvality
- [ ] Konfigurovat publikování NPM balíčku
- [ ] Nastavit versioning založený na změnách dat

### Fáze 7: Testování
- [ ] Vytvořit testy pro validaci promptů
- [ ] Přidat testy pro katalog systém
- [ ] Otestovat kompatibilitu s implementacemi 