import { KeyboardEvent } from 'react'
import {
  VideoCardContainer,
  VideoCardThumbnail,
  VideoCardTitle,
} from './styles'
import { Video } from '@/types'
import Image from 'next/image'

interface VideoCardProps {
  content: Video
  setDialogOpen: (content?: Video) => void
}

export function VideoCard({ content, setDialogOpen }: VideoCardProps) {
  function handleClick() {
    setDialogOpen(content)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setDialogOpen(content)
    }
  }

  return (
    <VideoCardContainer
      tabIndex={0}
      role="button"
      title={content.title}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <VideoCardThumbnail>
        <Image src={content.thumbUrl} width={360} height={200} alt="" />
      </VideoCardThumbnail>
      <VideoCardTitle>{content.title}</VideoCardTitle>
    </VideoCardContainer>
  )
}
