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
})
