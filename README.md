# shiki-lang-wollok

Wollok language support for [Shiki](https://shiki.style/).

This package republishes the Wollok TextMate grammar in a Shiki-friendly form, so you can load `wollok` as a custom language and optionally support the common Markdown fence alias `wlk`.

## Install

```bash
npm install shiki shiki-lang-wollok
```

## Usage

```ts
import { createHighlighter } from 'shiki'
import { wollokLanguage, wollokLangAlias } from 'shiki-lang-wollok'

const highlighter = await createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: [wollokLanguage],
  langAlias: wollokLangAlias,
})

const html = highlighter.codeToHtml(
  `object pepita {
    var energia = 100

    method vola(kms) { energia = energia - kms }
  }`,
  {
    lang: 'wlk',
    theme: 'github-dark',
  }
)
```

## Exports

- `wollokLanguage`: ready-to-load Shiki custom language registration
- `wollokGrammar`: raw TextMate grammar JSON
- `wollokAliases`: known Wollok language names
- `wollokLangAlias`: alias map for Shiki, currently `{ wlk: 'wollok' }`

## Why `langAlias`?

Shiki lets you load custom grammars directly, and it also lets you register aliases separately. This package keeps both pieces explicit so consumers can decide how they want to wire Wollok into their own highlighter setup.

## Source

The grammar is based on the official Wollok VS Code highlighting project:

- [uqbar-project/wollok-highlight-vscode](https://github.com/uqbar-project/wollok-highlight-vscode)

## License

LGPL-3.0
