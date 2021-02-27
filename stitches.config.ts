import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $hiContrast: 'hsl(206,2%,93%)',
      $loContrast: 'hsl(206,8%,8%)',
      $canvas: 'hsl(0,0%,15%)',
      $gray100: 'hsl(206,8%,12%)',
      $gray200: 'hsl(206,7%,14%)',
      $gray300: 'hsl(206,7%,15%)',
      $gray400: 'hsl(206,7%,24%)',
      $gray500: 'hsl(206,7%,30%)',
      $gray600: 'hsl(206,5%,53%)',
      $blue100: 'hsl(212,100%,10%)',
      $blue200: 'hsl(212,42%,12%)',
      $blue300: 'hsl(211,55%,16%)',
      $blue400: 'hsl(209,100%,84%)',
      $blue500: 'hsl(206,100%,50%)',
      $blue600: 'hsl(206,100%,60%)',
      $purple100: 'hsl(252,50%,10%)',
      $purple200: 'hsl(252,22%,14%)',
      $purple300: 'hsl(252,33%,20%)',
      $purple400: 'hsl(252,75%,84%)',
      $purple500: 'hsl(252,78%,60%)',
      $purple600: 'hsl(252,78%,71%)',
      $green100: 'hsl(152,75%,8%)',
      $green200: 'hsl(152,72%,11%)',
      $green300: 'hsl(150,60%,20%)',
      $green400: 'hsl(150,60%,40%)',
      $green500: 'hsl(148,60%,50%)',
      $green600: 'hsl(148,58%,60%)',
      $red100: 'hsl(346,100%,8%)',
      $red200: 'hsl(346,94%,13%)',
      $red300: 'hsl(348,90%,20%)',
      $red400: 'hsl(350,90%,40%)',
      $red500: 'hsl(352,100%,50%)',
      $red600: 'hsl(352,79%,65%)',
      $yellow100: 'hsl(52,50%,10%)',
      $yellow200: 'hsl(52,22%,14%)',
      $yellow300: 'hsl(52,33%,20%)',
      $yellow400: 'hsl(52,75%,78%)',
      $yellow500: 'hsl(52,78%,45%)',
      $yellow600: 'hsl(52,90%,45%)',
    },
    fonts: {
      $untitled: 'apple-system, sans-serif',
      $mono: '"JetBrains Mono", monospace',
    },
    fontWeights: {
      $light: '300',
      $normal: '500',
      $bold: '800',
    },
    fontSizes: {
      $normal: '1rem',
      $1: '1rem',
    },
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 640px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 768px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1024px) { ${rule} }`,
  },
  utils: {},
});
