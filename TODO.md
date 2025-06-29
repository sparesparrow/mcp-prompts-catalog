# MCP Prompts Catalog - Roadmap & TODO

## Phase 1: Repository Setup
- [x] Create `package.json` with dependencies
- [x] Set up JSON schema validation
- [x] Add dependency on `mcp-prompts-contracts`
- [x] Create build scripts

## Phase 2: Validation & Quality
- [x] Implement validation of all prompts against the JSON schema
- [x] Add automatic checks for placeholders in prompts
- [x] Add quality checks (duplicate IDs, language correctness, required examples)
- [x] Tools for placeholder checks (integrated in validation)
- [x] Check for duplicate prompts by ID and content
- [x] Ensure all prompts have required properties (`createdAt`, `updatedAt`, `examples`)
- [x] Fix prompt data according to validation output

## Phase 3: Synchronization & Automation
- [ ] Automate validation of all prompts against the latest schema from contracts
- [ ] Add tests to verify schema compliance with real catalog data
- [ ] Set up GitHub Actions for automatic validation and build

## Phase 4: Documentation & Onboarding
- [ ] Improve documentation and onboarding for contributors
- [ ] Add usage examples and guides

## Phase 5: Catalog System Features
- [ ] Improve catalog index system
- [ ] Add search and filtering capabilities
- [ ] Implement prompt categorization
- [ ] Create API for catalog access

## Phase 6: CI/CD Pipeline
- [ ] Set up GitHub Actions for validation
- [ ] Add automated quality checks
- [ ] Configure NPM package publishing
- [ ] Implement data-driven versioning

## Phase 7: Testing
- [ ] Create tests for prompt validation
- [ ] Add tests for catalog system features
- [ ] Test compatibility with implementations 