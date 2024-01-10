<p align="center">
<a href="https://www.npmjs.com/package/css2tailwind" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/bx:bxl-tailwind-css.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library convert css to tailwindcss
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/css2tailwind" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/css2tailwind" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=css2tailwind" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/css2tailwind" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/css2tailwind/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/css2tailwind/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/css2tailwind" alt="License" /></a>
</p>

## Playground
[Playground](https://css2tailwind.vercel.app/css-to-tailwind)


## Extension for vscode
[css-2-tailwindcss](https://marketplace.visualstudio.com/items?itemName=hunghg255.css-2-tailwindcss&ssr=false#overview)

## Install

```bash
npm i css2tailwind@latest --save-dev
```

With `yarn`

```bash
yarn add css2tailwind@latest -D
```

## Configuration
```md
CssToTailwind: : (code: string, config?: TranslatorConfig)
```

### `TranslatorConfig`

|       Attribute       |                                    Description                                     |            Type             |
| :-------------------: | :--------------------------------------------------------------------------------: | :-------------------------: |
|       `prefix`        | [tailwind configuration prefix](https://tailwindcss.com/docs/configuration#prefix) |           string            |
| `useAllDefaultValues` |                Use tailwind all default values(The default is true)                |           boolean           |
|     `customTheme`     |                    Custom conversion of preset property values                     | [CustomTheme](#customtheme) |


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

## `CustomTheme`

```typescript
export interface CustomTheme
  extends Record<string, undefined | Record<string, string>> {
  media?: Record<string, string>;
  "backdrop-blur"?: Record<string, string>;
  "backdrop-brightness"?: Record<string, string>;
  "backdrop-contrast"?: Record<string, string>;
  "backdrop-grayscale"?: Record<string, string>;
  "backdrop-hue-rotate"?: Record<string, string>;
  "backdrop-invert"?: Record<string, string>;
  "backdrop-opacity"?: Record<string, string>;
  "backdrop-saturate"?: Record<string, string>;
  "backdrop-sepia"?: Record<string, string>;
  blur?: Record<string, string>;
  brightness?: Record<string, string>;
  contrast?: Record<string, string>;
  grayscale?: Record<string, string>;
  "hue-rotate"?: Record<string, string>;
  invert?: Record<string, string>;
  saturate?: Record<string, string>;
  sepia?: Record<string, string>;
  scale?: Record<string, string>;
  rotate?: Record<string, string>;
  translate?: Record<string, string>;
  skew?: Record<string, string>;
  // custom more...
}
```

## CustomTheme Instructions

##### 1.media

In the `customTheme` configuration, `media` can customize responsive breakpoints, for example

customTheme

```json
{
  "media": {
    "@media (min-width: 1800px)": "3xl"
  }
}
```

css code

```css
@media (min-width: 1800px) {
  .my-media {
    display: flex;
    align-items: center;
  }
}
```

out code

```text
@media(min-width:1800px)-->.my-media Result Code:
3xl:flex 3xl:items-center
```

##### 2.`backdrop-filter`, `filter`, `transform`

How to customize `backdrop-filter`, `filter`, `transform` in customTheme

The sub-attributes in these three attribute values do not need to be prefixed when customizing, for example

customTheme

```json
{
  "backdrop-blur": {
    "99999px": "super-big"
  },
  "rotate": {
    "99deg": "crooked"
  }
}
```

css code

```css
.my-style {
  transform: rotate(99deg);
  backdrop-filter: blur(99999px);
}
```

out code

```text
.my-style Result Code:
transform rotate-crooked backdrop-filter backdrop-blur-super-big
```

##### 3.Customize any property value alias in customTheme

Customizing other properties in `customTheme` needs to be prefixed, for example

customTheme

```json
{
  "width": {
    "288px": "w-custom" // Need to add `w-` prefix
  },
  "box-shadow": {
    "10px 10px 5px #888888": "box-shadow-custom" // Need to add `box-shadow-` prefix
  },
  "font-size": { // Need to add `font-size-` prefix
    "20px: "2xl",
    "1.25rem": "2xl"
  }
}
```

css code

```css
.my-style {
  box-shadow: 10px 10px 5px #888888;
  width: 288px;
  font-size: 20px;
}
```

out code

```text
.my-style Result Code:
box-shadow-custom w-custom text-2xl
```

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
