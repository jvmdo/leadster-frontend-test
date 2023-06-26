export type Video = {
  id: string
  title: string
  videoUrl: string
  thumbUrl: string
  type: string
  description: string
  downloads: Array<{
    name: string
    href: string
    color: string
  }>
}
