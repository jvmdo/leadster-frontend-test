import { CategoryChips } from '@/components/CategoryChips'
import {
  MainContentContainer,
  MainContentFooter,
  MainContentGallery,
  MainContentHeader,
} from './styles'
import { useState } from 'react'
import { SortSelector } from '@/components/SortSelector'
import { ContentBox } from '@/layouts/DefaultLayout/components/ContentBox'
import { Pagination } from '@/components/Pagination'
import { usePagination } from '@/hooks/usePagination'
import { VideoCard } from '@/components/VideoCard'
import { VideoDialog } from '@/components/VideoDialog'
import { Video } from '@/types'

interface MainContentProps {
  filterItems: string[]
  sortItems: string[]
  videos: Video[]
}

export function MainContent({
  filterItems,
  sortItems,
  videos,
}: MainContentProps) {
  const [chips, setChips] = useState<string[]>([])
  const [orderBy, setOrderBy] = useState(sortItems[0])
  const [page, setPage] = useState(1)
  const { slice, range, rangeLength } = usePagination<Video>(videos, page, 4)
  const [dialogOpen, setDialogOpen] = useState<Video | undefined>()

  function handleChipsInput(chips: string[]) {
    setChips(chips)
  }

  function handleSortInput(orderBy: string) {
    setOrderBy(orderBy)
  }

  return (
    <MainContentContainer id="main-content">
      <ContentBox>
        <MainContentHeader>
          <div>
            <CategoryChips
              categories={filterItems}
              chips={chips}
              onChipsChange={handleChipsInput}
            />
          </div>
          <div>
            <p>Ordenar por: </p>
            <SortSelector
              categories={sortItems}
              orderBy={orderBy}
              onOrderByChange={handleSortInput}
            />
          </div>
        </MainContentHeader>
        <MainContentGallery>
          {slice.map((content) => (
            <VideoCard
              key={content.id}
              content={content}
              setDialogOpen={setDialogOpen}
            />
          ))}
        </MainContentGallery>
        <MainContentFooter>
          <div>
            <p>Página: </p>
            <Pagination
              range={range}
              rangeTotalLength={rangeLength}
              page={page}
              setPage={setPage}
            />
          </div>
        </MainContentFooter>

        <VideoDialog content={dialogOpen} onContentChange={setDialogOpen} />
      </ContentBox>
    </MainContentContainer>
  )
}
