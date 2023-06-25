import { styled } from '@/styles/stitches.config'

export const LinkGroupContainer = styled('div', {
  display: 'grid',
  fluidGap: ['$3', '$12'],

  ul: {
    display: 'flex',
    flexDirection: 'column',
    fluidGap: ['$3', '$6'],
  },
})
