import { styled } from '@/styles/stitches.config'

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  fluidMarginBlock: ['$6', '$8'],
})

export const PaginationEdgeButton = styled('button', {
  backgroundColor: '$white',
  border: 'none',

  color: '$gray500',

  variants: {
    onEdge: {
      true: {
        color: '$primary',
      },
    },
  },
})

export const PaginationPageList = styled('div', {
  display: 'flex',
})

export const PaginationButton = styled('button', {
  backgroundColor: '$white',
  border: 'none',
  borderRadius: '0.5rem',

  color: '$gray500',
  fluidFontSize: ['$base', '$xl'],
  fontWeight: '$medium',

  aspectRatio: 1,
  inlineSize: '2.5rem',

  variants: {
    active: {
      true: {
        border: '1px solid $primary',
        color: '$primary',
      },
    },
  },
})
