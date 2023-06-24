import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  // Reset
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  ':where(html)': {
    WebkitTextSizeAdjust: 'none',
    colorScheme: 'dark light',
  },

  '@supports not (min-block-size: 100dvb)': {
    ':where(html)': {
      blockSize: '100%',
    },
  },

  '@media (prefers-reduced-motion: no-preference)': {
    ':where(html:focus-within)': {
      scrollBehavior: 'smooth',
    },
  },

  ':where(body)': {
    blockSize: '100%',
    '&': { blockSize: '100dvb' },
    lineHeight: 1.5,
    fontFamily: 'system-ui, sans-serif',
    WebkitFontSmoothing: 'antialiased',
  },

  ':where(input, button, textarea, select)': {
    font: 'inherit',
    color: 'inherit',
  },

  ':where(button, label, select, summary, [role="button"], [role="option"])': {
    cursor: 'pointer',
  },

  ':where(:disabled)': {
    cursor: 'not-allowed',
  },

  ':where(button)': {
    borderStyle: 'solid',
  },

  ':where(ul, ol)': {
    listStyle: 'none',
  },

  ':where(img, svg, video, canvas, audio, iframe, embed, object)': {
    display: 'block',
  },

  ':where(img, picture, svg)': {
    maxInlineSize: '100%',
    blockSize: 'auto',
  },

  ':where(p, h1, h2, h3, h4, h5, h6)': {
    overflowWrap: 'break-word',
  },

  ':where(h1, h2, h3)': {
    lineHeight: 'calc(1em + 0.5rem)',
  },

  ':where(hr)': {
    border: 'none',
    borderBlockStart: '1px solid',
    blockSize: 0,
    color: 'inherit',
    overflow: 'visible',
  },

  ':where(:focus-visible)': {
    outline: '2px solid $colors$yellow500',
    outlineOffset: '2px',
  },

  // General
  html: {
    backgroundColor: '$white',
    color: '$secondary',

    scrollbarColor: '$secondary $blue200',

    '::-webkit-scrollbar': {
      backgroundColor: '$blue200',
      borderRadius: '$full',
      width: '0.5em',
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: '$secondary',
      borderRadius: '$full',

      '&:hover': {
        backgroundColor: 'color-mix(in srgb, $secondary, transparent 50%)',
      },
    },
  },

  body: {
    fontFamily: '$default', // See _app.tsx
    minInlineSize: '20rem',
  },

  // Target the Next.js wrapper
  '#__next': {
    minBlockSize: '100%',
    position: 'relative',
  },
})
