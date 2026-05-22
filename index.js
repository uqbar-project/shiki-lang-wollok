import grammar from './grammar/wollok.tmLanguage.json' with { type: 'json' };

export const wollokGrammar = Object.freeze(grammar);

export const wollokLanguage = Object.freeze({
  name: 'wollok',
  scopeName: 'source.wollok',
  ...grammar,
});

export const wollokAliases = Object.freeze(['wollok', 'wlk']);

export const wollokLangAlias = Object.freeze({
  wlk: 'wollok',
});

export default wollokLanguage;
