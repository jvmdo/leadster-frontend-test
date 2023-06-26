import { keyframes, styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import DownloadIcon from 'public/icons/download.svg'

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'scale(.96)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'scale(1)' },
  '100%': { opacity: 0, transform: 'scale(0.96)' },
})

export const DialogContent = styled(Dialog.Content, {
  $$contentInlineSize: 'min(92vw, 37.5rem)',

  backgroundColor: '$white',
  borderRadius: '0.75rem',
  boxShadow: '$default',

  display: 'flex',
  flexDirection: 'column',
  fluidGap: ['$4', '$6'],

  // blockSize: 'max-content',
  inlineSize: '$$contentInlineSize',

  fluidPaddingBlock: ['$6', '$8'],
  fluidPaddingInline: ['$4', '$6'],
  margin: 'auto',

  '&[data-state="open"]': {
    animation: `${contentShow} $transitions$content forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${contentHide} $transitions$content`,
  },

  overflow: 'hidden',

  // Blue line on top
  '&::before': {
    content: '',

    backgroundColor: '$primary',
    borderRadius: '5.25rem',

    blockSize: 5,

    position: 'absolute',
    insetInline: 0,
    insetBlockStart: 0,
  },
})

export const DialogTitle = styled(Dialog.Title, {
  fontWeight: '$bold',
  fluidFontSize: ['$lg', '$2xl'],
  textAlign: 'center',

  fluidMarginBlockStart: ['$1', '$2'],

  span: { color: '$primary' },
})

export const DialogVideo = styled('section', {
  alignSelf: 'center',

  backgroundColor: '$gray600',

  aspectRatio: '16 / 9',
  inlineSize: '$$contentInlineSize',
})

const subTitle = {
  h4: {
    fluidFontSize: ['$base', '$lg'],

    borderBlockEnd: '1px solid $gray300',

    fluidMarginBlockEnd: ['$2', '$3'],
    paddingBlockEnd: 'calc($1 * 1rem)',
  },
}

export const DialogDescription = styled(Dialog.Description, {
  ...subTitle,

  p: { fluidFontSize: ['$small', '$base'] },
})

export const DialogDownloadButton = styled(Link, {
  $$buttonBlockSize: '2rem',
  $$buttonColor: '$colors$green500',

  borderRadius: '0.35rem',
  backgroundColor: 'color-mix(in srgb, $$buttonColor, transparent 80%)',

  color: '$$buttonColor',
  fontSize: 'calc($small * 1rem)',
  textDecoration: 'none',

  blockSize: '$$buttonBlockSize',
  minInlineSize: '10rem',

  paddingInline: 'calc($2 * 1rem)',

  display: 'inline-flex',
  alignItems: 'center',

  overflow: 'hidden',

  '.icon': {
    backgroundImage: `url(${DownloadIcon.src})`,
    backgroundSize: '60%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    blockSize: '$$buttonBlockSize',
    inlineSize: '2rem',

    marginInlineStart: 'calc($2 * -1rem)',
    marginInlineEnd: 'calc($2 * 1rem)',

    position: 'relative',

    '&::before': {
      content: '',
      backgroundColor: 'color-mix(in srgb, $$buttonColor, transparent 50%)',

      position: 'absolute',
      inset: 0,
    },
  },

  variants: {
    color: {
      blue: { $$buttonColor: '$colors$blue500' },
      green: { $$buttonColor: '$colors$green500' },
      yellow: { $$buttonColor: '$colors$yellow500' },
    },
  },

  defaultVariants: {
    color: 'green',
  },
})

export const DialogDownloads = styled('footer', {
  ...subTitle,

  ul: {
    display: 'flex',
    flexFlow: 'row wrap',
    columnGap: 'calc($3 * 1rem)',
    rowGap: 'calc($1 * 1rem)',
  },
})

export const DialogClose = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  border: 'none',

  fluidPaddingBlock: ['$3', '$6'],
  fluidPaddingInline: ['$3', '$6'],

  position: 'absolute',
  insetBlockStart: 0,
  insetInlineEnd: 0,

  svg: {
    aspectRatio: 1,
    fluidBlockSize: ['1rem', '1.5rem'],

    color: '$gray400',

    transition: 'color $action',

    '&:is(:hover, :focus-visible)': {
      color: '$gray300',
    },
  },
})

const fadeIn = keyframes({
  '0%': { backgroundColor: 'transparent' },
  '100%': { backgroundColor: 'color-mix(in srgb, transparent 60%, $gray500)' },
})

const fadeOut = keyframes({
  '0%': { backgroundColor: 'color-mix(in srgb, transparent 60%, $gray500)' },
  '100%': { backgroundColor: 'transparent' },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  display: 'flex',
  alignItems: 'center',

  overflowY: 'auto',

  position: 'fixed',
  inset: 0,
  zIndex: 91,

  paddingBlock: '1rem',

  '&[data-state="open"]': {
    animation: `${fadeIn} $transitions$overlay forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} $transitions$overlay`,
  },
})
