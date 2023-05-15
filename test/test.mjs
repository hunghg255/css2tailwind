import { CssToTailwind } from "../dist/index.mjs";

const cssCode = `body {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  /* asd */
  background-color: transparent;
}`;

const conversionResult = CssToTailwind(cssCode);

console.log(conversionResult);
