import { createStitches } from '@stitches/react'
import { FluidFontSize, FluidSpaceSize, clamp } from './helpers'

export const { styled, globalCss, keyframes, getCssText, config } =
  createStitches({
    theme: {
      fonts: {
        default: 'var(--font-jakarta)',
      },

      fontSizes: {
        xs: '0.75',
        base: '1',
        lg: '1.125',
        xl: '1.25',
        '2xl': '1.5',
        '5xl': '3',
        '6xl': '3.75',
        '8xl': '6',
      },

      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
      },

      radii: {
        full: '9999px',
      },

      space: {
        1: '0.25',
        2: '0.5',
        3: '0.75',
        4: '1',
        5: '1.25',
        6: '1.5',
        7: '1.75',
        8: '2',
        9: '2.25',
        10: '2.5',
        12: '3',
        15: '3.75',
        18: '4.5',
        20: '5',
        23: '5.75',
      },

      colors: {
        white: '#ffffff',
        black: '#202020',

        blue100: '#f0f8ff',
        blue200: '#e6f3ff',
        blue400: '#00b1f5',
        blue500: '#007eff',

        gray100: '#C8D4DD',
        gray200: '#8F979F',
        gray300: '#838EAB',
        gray400: '#647599',
        gray500: '#1C3C50',
        gray600: '#737373',

        green500: '#00ae7f',
        green900: '#1c3c50',

        yellow500: '#ffc300',
        yellow800: '#a99445',

        primary: '$blue500',
        secondary: '$gray500',
      },

      transitions: {
        action: '150ms cubic-bezier(0.25, 0.1, 0.25, 1.0)',
        overlay: '250ms cubic-bezier(0.42, 0, 0.58, 1)',
      },
    },

    media: {
      xs: '(min-width: 23.4375em)', // 375px
      sm: '(min-width: 36em)', // 576px
      md: '(min-width: 48em)', // 768px
      lg: '(min-width: 62em)', // 992px
      xl: '(min-width: 75em)', // 1200px
      xxl: '(min-width: 87.5em)', // 1400px

      l: '(orientation: landscape)',
      p: '(orientation: portrait)',
    },

    utils: {
      fluidFontSize: (values: FluidFontSize) => ({
        fontSize: clamp(values),
      }),

      fluidPaddingBlock: (values: FluidSpaceSize) => ({
        paddingBlockStart: clamp(values),
        paddingBlockEnd: clamp(values),
      }),

      fluidPaddingBlockStart: (values: FluidSpaceSize) => ({
        paddingBlockStart: clamp(values),
      }),

      fluidPaddingBlockEnd: (values: FluidSpaceSize) => ({
        paddingBlockEnd: clamp(values),
      }),

      fluidPaddingInline: (values: FluidSpaceSize) => ({
        paddingInlineStart: clamp(values),
        paddingInlineEnd: clamp(values),
      }),

      fluidPaddingInlineStart: (values: FluidSpaceSize) => ({
        paddingInlineStart: clamp(values),
      }),

      fluidPaddingInlineEnd: (values: FluidSpaceSize) => ({
        paddingInlineEnd: clamp(values),
      }),

      fluidMarginBlock: (values: FluidSpaceSize) => ({
        marginBlockStart: clamp(values),
        marginBlockEnd: clamp(values),
      }),

      fluidMarginBlockStart: (values: FluidSpaceSize) => ({
        marginBlockStart: clamp(values),
      }),

      fluidMarginBlockEnd: (values: FluidSpaceSize) => ({
        marginBlockEnd: clamp(values),
      }),

      fluidMarginInline: (values: FluidSpaceSize) => ({
        marginInlineStart: clamp(values),
        marginInlineEnd: clamp(values),
      }),

      fluidMarginInlineStart: (values: FluidSpaceSize) => ({
        marginInlineStart: clamp(values),
      }),

      fluidMarginInlineEnd: (values: FluidSpaceSize) => ({
        marginInlineEnd: clamp(values),
      }),

      fluidGap: (values: FluidSpaceSize) => ({
        gap: clamp(values),
      }),

      fluidBlockSize: (values: FluidSpaceSize) => ({
        blockSize: clamp(values),
      }),

      fluidInlineSize: (values: FluidSpaceSize) => ({
        inlineSize: clamp(values),
      }),
    },
  } as const)
