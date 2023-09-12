import { expect, test } from 'vitest';
import { CssToTailwind } from '../src';

// Edit an assertion and save to see HMR in action

test('CSS to tailwindcss', () => {
  const cssCode = `body {
  width: 100%;
  height: calc(100vh - 50%);
  top: calc(100vh - 50%);
  margin-top: calc(100vh - 50%);
  margin: 0 !important;
  background-color: transparent;
}`;

  expect(CssToTailwind(cssCode)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal:
          'w-full h-[calc(100vh_-_50%)] top-[calc(100vh_-_50%)] mt-[calc(100vh_-_50%)] !m-0 bg-transparent',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS to tailwindcss with comment', () => {
  const cssCode1 = `body {
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 125% */


  /* Neutrals/07 */

  color: #23262F;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'font-semibold text-xl leading-[20px] text-[#23262F]',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS to tailwindcss with variable', () => {
  const cssCode1 = `body {
    color: var(--color-text);
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'text-[var(--color-text)]',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS to tailwindcss with variable', () => {
  const cssCode1 = `body {
    height: var(--height);
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'h-[var(--height)]',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS to tailwindcss with variable', () => {
  const cssCode1 = `body {
    max-height: fit-content;
    color: var(--neutral-1, #2F2F2F);
    color: var(--neutral-1);
    color: #2F2;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'max-h-fit text-[#2F2F2F] text-[var(--neutral-1)] text-[#2F2]',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS Aspect Ratio', () => {
  const cssCode1 = `body {
    aspect-ratio: auto;
    aspect-ratio: 1 / 1;
    aspect-ratio: 16 / 9;
    aspect-ratio: 3 / 4;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'aspect-auto aspect-square aspect-video [aspect-ratio:3_/_4]',
        selectorName: 'body',
      },
    ],
  });
});

