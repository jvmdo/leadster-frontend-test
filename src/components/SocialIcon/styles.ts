import { styled } from '@/styles/stitches.config'

export const SocialIconContainer = styled('div', {
  backgroundColor: 'color-mix(in srgb, $gray300, transparent 75%)',
  border: '1px solid transparent',
  borderRadius: '$full',

  aspectRatio: 1,
  fluidBlockSize: ['1.75', '3'],

  display: 'grid',
  placeItems: 'center',

  svg: {
    fill: '$gray300',
    fluidBlockSize: ['0.75', '1'],
  },

  transition: '$action',

  '*:is(:hover, :focus-visible) > &': {
    borderColor: '$blue400',
    svg: { fill: '$blue400' },
  },
})
