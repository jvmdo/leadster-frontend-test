import { ContentBox } from '@/layouts/DefaultLayout/components/ContentBox'
import { styled } from '@/styles/stitches.config'
import Image from 'next/image'
import CardIcon from 'public/icons/card.svg'

export const CallToActionContainer = styled('section', {
  backgroundColor: '$blue100',

  fluidPaddingBlock: ['$8', '$15'],

  isolation: 'isolate',
  overflow: 'hidden',

  [`${ContentBox}`]: {
    $$maxBlockSize: '90rem',

    display: 'grid',
    alignItems: 'center',
    fluidGap: ['$8', '$20'],
    rowGap: '$10',

    textAlign: 'center',

    '@xl': {
      gridTemplateColumns: '1fr 1fr',

      textAlign: 'start',
    },

    position: 'relative',

    // Background polygon
    '&::before': {
      content: '',

      position: 'absolute',
      inset: 0,
      zIndex: '-1',

      backgroundColor: '$blue200',
      borderRadius: '5rem',

      aspectRatio: 1.5,
      '@xl': { aspectRatio: 2 },
      height: 'calc(50% + 15vw)',

      rotate: '-138.5deg',
      translate: '-34% 50%',
    },
  },
})

export const CallToActionHero = styled(Image, {
  flex: '1 0 20rem',

  blockSize: 'auto',
  maxInlineSize: 'min(100%, 36rem)',

  marginInline: 'auto',

  position: 'relative',
  insetInlineStart: '-1.5rem',

  '@xl': {
    maxInlineSize: 'min(100%, clamp(36rem, 11.229rem + 39.95vw, 46.188rem))',
    insetInlineStart: 'unset',
  },
})

export const CallToActionContent = styled('div', {
  flex: '1 1 30rem',

  display: 'grid',
  fluidGap: ['$4', '$6'],

  h2: {
    fontWeight: '$medium',
    fluidFontSize: ['$xl', '$4xl'],

    fluidMarginBlockEnd: ['$2', '$3'],

    strong: { display: 'inline-block' },
  },

  p: {
    fluidFontSize: ['$base', '$xl'],
  },

  hr: {
    borderBlockWidth: 2,
    color: 'color-mix(in srgb, CurrentColor, transparent 80%)',
  },

  '.action, .rating': {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',

    '@xl': { justifyContent: 'start' },
  },

  '.action': {
    fluidGap: ['$3', '$4'],

    img: {
      fluidInlineSize: ['8.5', '12.75'],
      height: 'auto',
    },
  },

  '.rating': {
    fluidGap: ['$2', '$5'],
    columnGap: '2rem',

    img: {
      display: 'inline',
      marginInlineEnd: '0.5rem',
    },

    p: { fluidFontSize: ['$xs', '$small'] },

    // Card icon
    'p:first-of-type': {
      fluidPaddingInlineStart: ['$4', '$6'],
      position: 'relative',

      '&::before': {
        content: '',

        aspectRatio: 1,
        fluidInlineSize: ['0.9', '1.1'],

        backgroundImage: `url(${CardIcon.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        position: 'absolute',
        insetInlineStart: 0,
        insetBlock: 0,
        marginBlock: 'auto',
      },
    },
  },
})
