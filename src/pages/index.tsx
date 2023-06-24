import { styled } from '@/styles/stitches.config'

const Box = styled('div', {
  inlineSize: '50%',
  '&': { inlineSize: '50dvi' },
  blockSize: '200vh',
})

export default function Home() {
  return (
    <Box>
      <h1>Hello, Leadster!</h1>
      <input type="text" />
      <button>focus me</button>
    </Box>
  )
}
