import { styled } from '@/styles/stitches.config'
import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.SelectTrigger, {
  cursor: 'pointer',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fluidGap: ['$3', '$4'],

  backgroundColor: '$white',
  border: '1px solid $gray500',
  borderRadius: '0.5rem',

  color: '$gray500',
  fluidFontSize: ['$xs', '$base'],
  fontWeight: '$medium',

  fluidPaddingBlock: ['$1', '$2'],
  fluidPaddingInline: ['$3', '$5'],

  minInlineSize: '9rem',
})

export const SelectIcon = styled(Select.SelectIcon, {
  display: 'inline-flex',
  alignItems: 'center',

  color: '$gray500',

  '[data-state="open"] > &': {
    visibility: 'hidden',
  },
})

export const SelectContent = styled(Select.Content, {
  backgroundColor: '$white',
  borderRadius: '0 0 0.5rem 0.5rem',
  boxShadow: '$default',

  width: 'calc(var(--radix-select-trigger-width) + 2rem)',
  maxHeight: 'var(--radix-select-content-available-height)',
})

export const SelectViewport = styled(Select.Viewport, {
  padding: '1rem',
})

export const SelectItem = styled(Select.Item, {
  display: 'flex',
  alignItems: 'center',

  borderRadius: '0.25rem',

  fluidFontSize: ['$xs', '$base'],

  height: '1.5rem',
  padding: '1rem 0.75rem',

  position: 'relative',
  userSelect: 'none',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$blue200',
  },
})

export const SelectItemIndicator = styled(Select.ItemIndicator, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray500',

  position: 'absolute',
  insetInlineEnd: '0.25rem',
})
