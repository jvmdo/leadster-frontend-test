import { styled } from '@/styles/stitches.config'

export const LinkGroupContainer = styled('div', {
  display: 'grid',
  fluidGap: ['$3', '$12'],

  ul: {
    display: 'flex',
    flexDirection: 'column',
    fluidGap: ['$3', '$6'],

    li: { overflow: 'hidden' },
  },

  a: {
    color: '$green900',

    transition: 'color $action',
    position: 'relative',

    '&::before': {
      content: '',

      backgroundColor: '$blue400',
      blockSize: 1,

      position: 'absolute',
      insetInline: 0,
      insetBlockEnd: '-0.15ex',

      translate: '-100%',
      transition: 'translate $action',
    },

    '&:is(:hover, :focus-visible)': {
      color: '$blue400',
      '&::before': { translate: 0 },
    },
  },
})
