export interface TextMateGrammar {
  name?: string;
  scopeName: string;
  fileTypes?: string[];
  patterns: unknown[];
  repository?: Record<string, unknown>;
  uuid?: string;
  [key: string]: unknown;
}

export interface ShikiLanguageRegistration extends TextMateGrammar {
  name: string;
  scopeName: string;
}

export declare const wollokGrammar: TextMateGrammar;
export declare const wollokLanguage: ShikiLanguageRegistration;
export declare const wollokAliases: readonly ['wollok', 'wlk'];
export declare const wollokLangAlias: Readonly<{
  wlk: 'wollok';
}>;

export default wollokLanguage;
