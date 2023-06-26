import React from 'react'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogDownloadButton,
  DialogDownloads,
  DialogOverlay,
  DialogTitle,
  DialogVideo,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { Video } from '@/types'
import YouTube from 'react-youtube'

interface VideoDialogProps {
  content?: Video
  onContentChange: (content?: Video) => void
}

export function VideoDialog({ content, onContentChange }: VideoDialogProps) {
  const open = Boolean(content)

  function setOpen(open: boolean) {
    onContentChange(open ? content : undefined)
  }

  const hasDownloads = Boolean(content?.downloads.length)

  if (!content) return

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogTitle>
              <span>{content.type}: </span>
              {content.title}
            </DialogTitle>
            <DialogVideo>
              <YouTube
                videoId={content.id}
                title={content.title}
                className="youtubeContainer"
                loading="lazy"
                opts={{
                  origin: window.location.origin,
                }}
              />
            </DialogVideo>
            <DialogDescription as="div">
              <h4>Descrição</h4>
              <p>{content.description}</p>
            </DialogDescription>
            {hasDownloads && (
              <DialogDownloads>
                <h4>Downloads</h4>
                <ul>
                  {content.downloads.map(({ name, href, color }) => (
                    <li key={name}>
                      {
                        <DialogDownloadButton
                          href={href}
                          download
                          target="_blank"
                          color={color as any}
                        >
                          <span className="icon"></span>
                          {name}
                        </DialogDownloadButton>
                      }
                    </li>
                  ))}
                </ul>
              </DialogDownloads>
            )}
            <DialogClose>
              <X weight="bold" />
            </DialogClose>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
