import { styled } from '@/styles/stitches.config'

export const BrandButtonContainer = styled('button', {
  display: 'inline-flex',

  backgroundColor: '$primary',
  border: 'none',
  borderRadius: '$pill',

  color: '$white',
  fluidFontSize: ['$small', '$lg'],
  fontWeight: '$bold',
  textTransform: 'uppercase',

  fluidPaddingBlock: ['$3', '$5'],
  fluidPaddingInline: ['$6', '$8'],

  transition: 'background-color $action',

  '&:is(:hover, :focus-visible)': {
    backgroundColor: '$green500',
  },
})
