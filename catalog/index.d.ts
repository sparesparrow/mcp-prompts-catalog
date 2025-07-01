export declare const prompts: Record<string, any>;
export declare function getPromptsDir(): string;
export declare function getCategories(): string[];
export declare function listPrompts(category: string): string[];
/**
 * Loads a prompt by name and category. Supports .json, .yaml, .yml, .txt, .md
 * Returns a prompt object (for JSON/YAML) or { name, content } for TXT/MD.
 */
export function loadPrompt(name: string, category: string): any;
