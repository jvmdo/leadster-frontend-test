import { ContentBox } from '@/layouts/DefaultLayout/components/ContentBox'
import { styled } from '@/styles/stitches.config'

export const MainContentContainer = styled('main', {
  fluidPaddingBlock: ['$12', '$23'],

  [`${ContentBox}`]: {
    display: 'grid',
    fluidGap: ['$4', '$6'],
  },
})

const namedControls = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'calc($3 * 1rem)',

  p: {
    fluidFontSize: ['$xs', '$small'],
    fontWeight: '$bold',
  },
}

export const MainContentHeader = styled('header', {
  display: 'flex',
  flexFlow: 'row wrap',
  fluidGap: ['$4', '$6'],
  justifyContent: 'center',

  '& > div:first-of-type': {
    flex: '1 0 min(100%, 24rem)',
  },

  '& > div:last-of-type': {
    inlineSize: 'max-content',
    ...namedControls,
  },

  borderBlockEnd: '2px solid $gray100',
  fluidPaddingBlockEnd: ['$4', '$6'],
})

export const MainContentGallery = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
  fluidGap: ['$4', '$7'],
  placeItems: 'center',

  fluidPaddingBlockStart: ['$6', '$9'],
  fluidPaddingBlockEnd: ['$9', '$12'],
})

export const MainContentFooter = styled('footer', {
  borderBlockStart: '2px solid $gray100',

  div: { ...namedControls },
})
