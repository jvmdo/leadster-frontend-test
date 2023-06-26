import { styled } from '@/styles/stitches.config'
import PlayIcon from 'public/icons/play.svg'

export const VideoCardContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '1rem',
  boxShadow: '$default',

  display: 'flex',
  flexDirection: 'column',

  maxInlineSize: '22.5rem',
  overflow: 'hidden',

  cursor: 'pointer',
})

export const VideoCardThumbnail = styled('div', {
  position: 'relative',

  // Blue overlay
  '&::after': {
    content: '',

    position: 'absolute',
    inset: 0,

    backgroundImage: `url(${PlayIcon.src})`,
    backgroundColor: 'color-mix(in srgb, $primary, transparent 50%)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    opacity: 0,
    transition: 'opacity $overlay',
  },

  [`${VideoCardContainer}:is(:hover, :focus-visible) &::after`]: {
    opacity: 1,
  },
})

const lineClamp = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  '@supports (-webkit-line-clamp: 2)': {
    display: '-webkit-box',
    whiteSpace: 'initial',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
}

export const VideoCardTitle = styled('h2', {
  fluidFontSize: ['$base', '$xl'],

  // Margin instead of padding otherwise [lineClamp]'s overflow won't work properly
  fluidMarginBlock: ['$4', '$6'],
  fluidPaddingInline: ['$6', '$8'],

  ...lineClamp,

  transition: '$overlay',

  [`${VideoCardContainer}:is(:hover, :focus-visible) &`]: {
    color: '$primary',
  },
})
