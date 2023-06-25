import { styled } from '@/styles/stitches.config'

export const ContentBox = styled('div', {
  $$maxBlockSize: '71.25rem',

  // fluidPaddingInline: ['$3', '$15'],

  // Set `max-block-size` and center the container
  marginInline: 'max(0.75rem, 50% - $$maxBlockSize / 2)',

  display: 'grid',
  placeContent: 'center',
})
