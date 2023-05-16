import { CssToTailwind } from '../dist/index.mjs';

const cssCode = `body {
  width: 100%;
  height: calc(100vh - 50%);
  top: calc(100vh - 50%);
  margin-top: calc(100vh - 50%);
  margin: 0 !important;
  background-color: transparent;
}`;

const conversionResult = CssToTailwind(cssCode);

console.log(conversionResult);
