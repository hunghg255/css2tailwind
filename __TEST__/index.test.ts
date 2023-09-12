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

test('CSS Display', () => {
  const cssCode1 = `body {
    display: block;
    display: inline-block;
    display: inline;
    display: flex;
    display: inline-flex;
    display: table;
    display: inline-table;
    display: table-caption;
    display: table-cell;
    display: table-column;
    display: table-column-group;
    display: table-footer-group;
    display: table-header-group;
    display: table-row-group;
    display: table-row;
    display: flow-root;
    display: grid;
    display: inline-grid;
    display: contents;
    display: list-item;
    display: none;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'block inline-block inline flex inline-flex table inline-table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row-group table-row flow-root grid inline-grid contents list-item hidden',
        selectorName: 'body',
      },
    ],
  });
});


test('CSS Object Fit', () => {
  const cssCode1 = `body {
    object-fit: contain;
    object-fit: cover;
    object-fit: fill;
    object-fit: none;
    object-fit: scale-down;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'object-contain object-cover object-fill object-none object-scale-down',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS Overflow', () => {
  const cssCode1 = `body {
    overflow: auto;
    overflow: hidden;
    overflow: clip;
    overflow: visible;
    overflow: scroll;
    overflow-x: auto;
    overflow-y: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow-x: clip;
    overflow-y: clip;
    overflow-x: visible;
    overflow-y: visible;
    overflow-x: scroll;
    overflow-y: scroll;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'overflow-auto overflow-hidden overflow-visible overflow-scroll overflow-x-auto overflow-y-auto overflow-x-hidden overflow-y-hidden overflow-x-visible overflow-y-visible overflow-x-scroll overflow-y-scroll',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS Position', () => {
  const cssCode1 = `body {
    position: static;
    position: fixed;
    position: absolute;
    position: relative;
    position: sticky;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'static fixed absolute relative sticky',
        selectorName: 'body',
      },
    ],
  });
});


test('CSS visibility', () => {
  const cssCode1 = `body {
    visibility: visible;
    visibility: hidden;
    visibility: collapse;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'visible invisible collapse',
        selectorName: 'body',
      },
    ],
  });
});

test('CSS z-index', () => {
  const cssCode1 = `body {
    z-index: 0;
    z-index: 10;
    z-index: 20;
    z-index: 30;
    z-index: 40;
    z-index: 50;
    z-index: auto;
    z-index: 3;
    z-index: 9;
  }`;

  expect(CssToTailwind(cssCode1)).toEqual({
    code: 'OK',
    data: [
      {
        resultVal: 'z-0 z-10 z-20 z-30 z-40 z-50 z-auto z-[3] z-[9]',
        selectorName: 'body',
      },
    ],
  });
});

