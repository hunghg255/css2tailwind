"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css2tailwind_1 = require("css2tailwind");
var cssCode = "body {\n  width: 100%;\n  height: 50%;\n  margin: 0 !important;\n  /* asd */\n  background-color: transparent;\n}";
var conversionResult = (0, css2tailwind_1.CssToTailwind)(cssCode);
console.log(conversionResult);
