import { CustomSelect } from "./types";

export const hasNegative = (val: string): ['-' | '', string] => [
  val[0] === '-' ? '-' : '',
  val[0] === '-' ? val.slice(1) : val,
];

export const getCustomVal = (val: string) => {
  // FIGMA: color: var(--neutral-1, #2F2F2F)
  if (val.startsWith('var') && val.includes(',')) return val?.match(/#[0-9a-zA-Z]{3,6}/g)?.[0] ?? val;

  val = val.replace(/\s/g, '_');
  for (let index = 1; index < val.length; index) {
    const char = val[index];
    if (char === '_' && char === val[index - 1]) {
      val = val.slice(0, index) + val.slice(index + 1);
    } else {
      index++;
    }
  }
  return val;
};

export const isColor = (str: string, joinLinearGradient = false) => {
  if (str.startsWith('var')) return true;

  const namedColors = [
    'initial',
    'inherit',
    'currentColor',
    'currentcolor',
    'transparent',
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgrey',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'grey',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgrey',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
  ];
  const regexp =
    /^\s*#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\s*$|^\s*rgb\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*\)\s*$|^\s*rgba\(\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d{1,3}|[a-z]+)\s*,\s*(\d*(\.\d+)?)\s*\)\s*$|^\s*hsl\(\s*(\d+)\s*,\s*(\d*(\.\d+)?%)\s*,\s*(\d*(\.\d+)?%)\)\s*$|^\s*hsla\((\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*(\d*(\.\d+)?)\)\s*$/i;
  return (
    regexp.test(str) ||
    namedColors.includes(str) ||
    (joinLinearGradient && /^\s*linear-gradient\([\w\W]+?\)\s*$/.test(str))
  );
};

export const isUnit = (str: string) => {
  if (str.includes('calc')) return true;
  if (str.startsWith('var')) return true;

  return (
    [
      'em',
      'ex',
      'ch',
      'rem',
      'vw',
      'vh',
      'vmin',
      'vmax',
      'cm',
      'mm',
      'in',
      'pt',
      'pc',
      'px',
      'min-content',
      'mincontent',
      'max-content',
      'maxcontent',
      'fit-content',
      'fitcontent',
      'deg',
      'grad',
      'rad',
      'turn',
      'ms',
      's',
      'Hz',
      'kHz',
      '%',
      'length',
      'inherit',
      'thick',
      'medium',
      'thin',
      'initial',
      'auto',
    ].includes(str.replace(/[.\d\s-]/g, '')) ||
    /^[-.\d]+$/.test(str.trim()) ||
    /^var\(.+\)$/.test(str)
  );
};

export const getUnitMetacharactersVal = (
  val: string,
  excludes: CustomSelect[] = []
): string | undefined => {
  if (/^\d+\.[1-9]{2,}%$/.test(val)) {
    val = `${Number(val.slice(0, -1))
      .toFixed(6)
      .replace(/(\.[1-9]{2})\d+/, '$1')}%`;
  }
  const config: Record<string, string> = {
    auto: 'auto',
    '50%': '1/2',
    '33.33%': '1/3',
    '66.66%': '2/3',
    '25%': '1/4',
    '75%': '3/4',
    '20%': '1/5',
    '40%': '2/5',
    '60%': '3/5',
    '80%': '4/5',
    '16.66%': '1/6',
    '83.33%': '5/6',
    '8.33%': '1/12',
    '41.66%': '5/12',
    '58.33%': '7/12',
    '91.66%': '11/12',
    '100%': 'full',
    '100vw': 'screen',
    '100vh': 'screen',
    'min-content': 'min',
    'max-content': 'max',
  };
  excludes.forEach((key) => {
    delete config[key];
  });
  return config[val];
};

export const getRemDefaultVal = (val: string) => {
  return {
    '0px': '0',
    '1px': 'px',
    '0.125rem': '0.5',
    '0.25rem': '1',
    '0.375rem': '1.5',
    '0.5rem': '2',
    '0.625rem': '2.5',
    '0.75rem': '3',
    '0.875rem': '3.5',
    '1rem': '4',
    '1.25rem': '5',
    '1.5rem': '6',
    '1.75rem': '7',
    '2rem': '8',
    '2.25rem': '9',
    '2.5rem': '10',
    '2.75rem': '11',
    '3rem': '12',
    '3.5rem': '14',
    '4rem': '16',
    '5rem': '20',
    '6rem': '24',
    '7rem': '28',
    '8rem': '32',
    '9rem': '36',
    '10rem': '40',
    '11rem': '44',
    '12rem': '48',
    '13rem': '52',
    '14rem': '56',
    '15rem': '60',
    '16rem': '64',
    '18rem': '72',
    '20rem': '80',
    '24rem': '96',
  }[val];
};

export const getBorderRadiusDefaultVal = (val: string) => {
  return {
    '0px': '-none',
    '0.125rem': '-sm',
    '0.25rem': 'null',
    '0.375rem': '-md',
    '0.5rem': '-lg',
    '0.75rem': '-xl',
    '1rem': '-2xl',
    '1.5rem': '-3xl',
    '9999px': '-full',
  }[val];
};

export const getFilterDefaultVal = (val: string) => {
  return {
    'blur(0)': 'blur-none',
    'blur(4px)': 'blur-sm',
    'blur(8px)': 'blur',
    'blur(12px)': 'blur-md',
    'blur(16px)': 'blur-lg',
    'blur(24px)': 'blur-xl',
    'blur(40px)': 'blur-2xl',
    'blur(64px)': 'blur-3xl',
    'brightness(0)': 'brightness-0',
    'brightness(.5)': 'brightness-50',
    'brightness(.75)': 'brightness-75',
    'brightness(.9)': 'brightness-90',
    'brightness(.95)': 'brightness-95',
    'brightness(1)': 'brightness-100',
    'brightness(1.05)': 'brightness-105',
    'brightness(1.1)': 'brightness-110',
    'brightness(1.25)': 'brightness-125',
    'brightness(1.5)': 'brightness-150',
    'brightness(2)': 'brightness-200',
    'contrast(0)': 'contrast-0',
    'contrast(.5)': 'contrast-50',
    'contrast(.75)': 'contrast-75',
    'contrast(1)': 'contrast-100',
    'contrast(1.25)': 'contrast-125',
    'contrast(1.5)': 'contrast-150',
    'contrast(2)': 'contrast-200',
    'drop-shadow(0 1px 1px rgba(0,0,0,0.05))': 'drop-shadow-sm',
    'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))':
      'drop-shadow',
    'drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))':
      'drop-shadow-md',
    'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))':
      'drop-shadow-lg',
    'drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))':
      'drop-shadow-xl',
    'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))': 'drop-shadow-2xl',
    'drop-shadow(0 0 #0000)': 'drop-shadow-none',
    'grayscale(0)': 'grayscale-0',
    'grayscale(1)': 'grayscale',
    'hue-rotate(-180deg)': '-hue-rotate-180',
    'hue-rotate(-90deg)': '-hue-rotate-90',
    'hue-rotate(-60deg)': '-hue-rotate-60',
    'hue-rotate(-30deg)': '-hue-rotate-30',
    'hue-rotate(-15deg)': '-hue-rotate-15',
    'hue-rotate(0deg)': 'hue-rotate-0',
    'hue-rotate(15deg)': 'hue-rotate-15',
    'hue-rotate(30deg)': 'hue-rotate-30',
    'hue-rotate(60deg)': 'hue-rotate-60',
    'hue-rotate(90deg)': 'hue-rotate-90',
    'hue-rotate(180deg)': 'hue-rotate-180',
    'invert(0)': 'invert-0',
    'invert(1)': 'invert',
    'saturate(0)': 'saturate-0',
    'saturate(.5)': 'saturate-50',
    'saturate(1)': 'saturate-100',
    'saturate(1.5)': 'saturate-150',
    'saturate(2)': 'saturate-200',
    'sepia(0)': 'sepia-0',
    'sepia(1)': 'sepia',
  }[val];
};

export const getFontSizeDefaultVal = (val: string) => {
  const fontSize: Record<string, string> = {
    '12px': 'text-xs',
    '14px': 'text-sm',
    '16px': 'text-base',
    '18px': 'text-lg',
    '20px': 'text-xl',
    '24px': 'text-2xl',
    '30px': 'text-3xl',
    '36px': 'text-4xl',
    '48px': 'text-5xl',
    '60px': 'text-6xl',
    '72px': 'text-7xl',
    '96px': 'text-8xl',
    '128px': 'text-9xl',
  };

  return fontSize[val] ?? `text-[${val}]`;
};
