# CSS to Tailwindcss

[![npm version](https://badge.fury.io/js/css2tailwind.svg)](https://badge.fury.io/js/css2tailwind) [![npm](https://img.shields.io/npm/dw/css2tailwind.svg?logo=npm)](https://www.npmjs.com/package/css2tailwind) [![npm](https://img.shields.io/bundlephobia/minzip/css2tailwind)](https://www.npmjs.com/package/css2tailwind)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)


## Install

```bash
npm i css2tailwind@latest --save-dev
```

With `yarn`

```bash
yarn add css2tailwind@latest -D
```

## Basic use

```js
import { CssToTailwind } from "css2tailwind";

const cssCode = `body {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  background-color: transparent;
}`;

const conversionResult = CssToTailwind(cssCode);

console.log(conversionResult);
// {
//   code: 'OK',
//   data: [
//     {
//       selectorName: 'body',
//       resultVal: 'w-full h-1/2 !m-0 bg-transparent'
//     }
//   ]
// }
```
