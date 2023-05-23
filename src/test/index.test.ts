import {  expect, test } from 'vitest'
import { CssToTailwind } from '..'

// Edit an assertion and save to see HMR in action

const cssCode = `body {
  width: 100%;
  height: calc(100vh - 50%);
  top: calc(100vh - 50%);
  margin-top: calc(100vh - 50%);
  margin: 0 !important;
  background-color: transparent;
}`;

const cssCode1 = `body {
  font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */


/* Neutrals/07 */

color: #23262F;
}`;

test('CSS to tailwindcss', () => {
  expect(CssToTailwind(cssCode)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'w-full h-[calc(100vh_-_50%)] top-[calc(100vh_-_50%)] mt-[calc(100vh_-_50%)] !m-0 bg-transparent',
        selectorName: 'body',
      },
    ],
  })
});

test('CSS to tailwindcss with comment', () => {
  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'font-semibold text-[16px] leading-[20px] text-[#23262F]',
        selectorName: 'body',
      },
    ],
  })
})
