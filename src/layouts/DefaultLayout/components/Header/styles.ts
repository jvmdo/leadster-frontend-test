import { styled } from '@/styles/stitches.config'
import Image from 'next/image'
import Lead from 'public/lead.png'

export const HeaderContainer = styled('header', {
  textAlign: 'center',
})

export const HeaderLogo = styled(Image, {
  blockSize: 'auto',
  fluidInlineSize: ['7.5', '12.5'],

  fluidMarginBlock: ['$6', '$10'],
  marginInline: 'auto',
})

export const HeaderContent = styled('section', {
  '.bubble': {
    display: 'inline-block',

    border: '2px solid $primary',
    borderRadius: '$pill $pill $pill 3rem',

    color: '$primary',
    fluidFontSize: ['$xs', '$small'],
    fontWeight: '$bold',
    textTransform: 'uppercase',

    fluidPaddingBlock: ['$1', '$2'],
    fluidPaddingInline: ['$3', '$5'],

    fluidMarginBlockEnd: ['$3', '$6'],
  },

  h1: {
    fontWeight: '$regular',
    fluidFontSize: ['$2xl', '$6xl'],
    lineHeight: '$small',
    textTransform: 'capitalize',

    span: {
      display: 'inline-block',

      color: '$primary',
      fontWeight: '$bold',
      fluidFontSize: ['$3xl', '$8xl'],

      fluidMarginBlockEnd: ['$3', '$5'],

      position: 'relative',

      // Icon above O
      '&::after': {
        content: '',

        aspectRatio: 49 / 32,
        fluidBlockSize: ['0.75', '2'],

        backgroundImage: `url(${Lead.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        position: 'absolute',
        insetInlineEnd: '-0.15em',
        insetBlockStart: '0.15em',
      },
    },
  },

  hr: {
    color: 'color-mix(in srgb, CurrentColor, transparent 75%)',

    inlineSize: 'min(85%, 50rem)',

    fluidMarginBlockEnd: ['$3', '$5'],
    marginInline: 'auto',
  },

  p: {
    fluidFontSize: ['$small', '$lg'],
    fontWeight: '$medium',

    maxInlineSize: 'max(30ch, 80%)',
    marginInline: 'auto',
  },

  fluidPaddingBlock: ['5', '10'],
  fluidPaddingBlockEnd: ['6', '11'],

  // Extends background color to the edges
  borderImage: 'conic-gradient($blue100 0 0) fill 0//0 100vmax',
})
