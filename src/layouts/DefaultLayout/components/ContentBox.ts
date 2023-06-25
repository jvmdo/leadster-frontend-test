import { styled } from '@/styles/stitches.config'

export const ContentBox = styled('div', {
  $$maxBlockSize: '71.25rem',
  // From @initial to @md
  $$marginInline: 'clamp(0.75rem, -0.143rem + 4.46vw, 2rem)',

  // Set `max-block-size` and center the container
  marginInline: 'max($$marginInline, 50% - $$maxBlockSize / 2)',
})
