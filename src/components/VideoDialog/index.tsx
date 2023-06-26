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

// TODO: maybe [content] is an Entity?
interface VideoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  content: {
    title: string
    videoUrl: string
    description: string
    downloads: Array<{
      name: string
      href: string
      // color: Pick<ComponentProps<typeof DialogDownloadButton>, 'color'>
      color: string
    }>
  }
}

export function VideoDialog({ open, onOpenChange, content }: VideoDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogTitle>
              <span>Webinar: </span>
              {content.title}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quia itaque minima nesciunt praesentium. Totam incidunt
                architecto pariatur officia eum voluptatum quis maxime. Sed
                delectus cumque labore, repellat quasi nesciunt!Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Delectus quia
                itaque minima nesciunt praesentium. Totam incidunt architecto
                pariatur officia eum voluptatum quis maxime. Sed delectus cumque
                labore, repellat quasi nesciunt!
              </p>
            </DialogTitle>
            <DialogVideo>Oiiiiiiiiiiiiiiiiii</DialogVideo>
            <DialogDescription>
              <h4>Descrição</h4>
              <p>{content.description}</p>
            </DialogDescription>
            <DialogDownloads>
              <h4>Downloads</h4>
              <ul>
                {content.downloads.map(({ name, href, color }) => (
                  <li key={name}>
                    {
                      <DialogDownloadButton
                        href={href}
                        download
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
            <DialogClose>
              <X weight="bold" />
            </DialogClose>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
