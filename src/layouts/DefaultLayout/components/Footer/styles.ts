import { styled } from '@/styles/stitches.config'
import { ContentBox } from '../ContentBox'

export const FooterContainer = styled('footer', {
  a: { textDecoration: 'none' },

  [`${ContentBox}`]: {
    display: 'grid',
    fluidGap: ['$6', '$10'],

    fluidMarginBlockStart: ['$8', '$15'],
    fluidMarginBlockEnd: ['$6', '$9'],
  },
})

export const FooterHead = styled('div', {
  img: {
    fluidInlineSize: ['10', '17'],
    marginInline: 'auto',
  },

  p: {
    fluidFontSize: ['$xs', '$base'],
    textAlign: 'center',

    fluidMarginBlockStart: ['$1', '$2'],
    marginInlineStart: '0.5rem', // small alignment fix
  },
})

export const FooterContent = styled('nav', {
  fluidFontSize: ['$small', '$base'],

  h3: {
    fluidFontSize: ['$base', '$lg'],
  },

  span: {
    color: '$black',
  },

  display: 'grid',
  justifyContent: 'space-around',
  gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
  fluidGap: ['$9', '$12'],

  '.contact-group': {
    display: 'grid',
    fluidGap: ['$3', '$9'],

    ul: {
      display: 'flex',
      fluidGap: ['$3', '$6'],
    },
  },
})

export const FooterSocials = styled('ul', {
  display: 'flex',
  gap: '1rem',
})

export const FooterContact = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  fluidGap: ['$3', '$6'],
})

export const FooterFoot = styled('div', {
  color: '$gray600',
  fluidFontSize: ['$xs', '$small'],

  fluidPaddingBlock: ['$5', '$9'],

  position: 'relative',

  // Line separator
  '&::before': {
    content: '',

    // Extends background color to the edges
    borderImage: 'conic-gradient($blue200 0 0) fill 0//0 100vmax',
    blockSize: 1,

    position: 'absolute',
    inset: 0,
  },

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  gap: '1rem',

  p: {
    flex: '1 1 15rem',
    textWrap: 'balance', // Chrome and Edge only yet
  },

  '@lg': {
    p: { flex: 'unset' },
  },

  a: { color: '$blue400' },
})
