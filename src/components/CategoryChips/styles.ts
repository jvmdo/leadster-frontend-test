import { styled } from '@/styles/stitches.config'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const CategoryChipsContainer = styled(ToggleGroup.Root, {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  fluidGap: ['$3', '$4'],

  '@lg': { justifyContent: 'flex-start' },
})

export const ToggleChip = styled(ToggleGroup.Item, {
  backgroundColor: 'transparent',
  borderRadius: '$pill',
  border: '1px solid $gray500',

  color: '$gray500',
  fluidFontSize: ['$xs', '$base'],
  fontWeight: '$medium',

  fluidPaddingBlock: ['$1', '$2'],
  fluidPaddingInline: ['$3', '$5'],

  transition: '$action',

  '&:is(:hover, :focus-visible)': {
    borderColor: '$primary',
    color: '$primary',
  },

  '&[data-state=on]': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$white',
  },
})
