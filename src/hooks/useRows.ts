import { useMediaQuery } from '@mantine/hooks'
import { config } from '@/styles/stitches.config'

const { media } = config

export function useRows() {
  const isDeviceMedium = useMediaQuery(media.md)
  const isDeviceLarge = useMediaQuery(media.lg)

  const rowsPerPage = isDeviceLarge ? 9 : isDeviceMedium ? 6 : 3

  return rowsPerPage
}
