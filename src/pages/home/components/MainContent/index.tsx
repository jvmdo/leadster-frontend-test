import { CategoryChips } from '@/components/CategoryChips'
import {
  MainContentContainer,
  MainContentFooter,
  MainContentGallery,
  MainContentHeader,
} from './styles'
import { useReducer, useState } from 'react'
import { SortSelector } from '@/components/SortSelector'
import { ContentBox } from '@/layouts/DefaultLayout/components/ContentBox'
import { Pagination } from '@/components/Pagination'
import { usePagination } from '@/hooks/usePagination'
import { VideoCard } from '@/components/VideoCard'
import { VideoDialog } from '@/components/VideoDialog'
import { Video } from '@/types'
import { videosReducer } from '@/reducers/videos'
import { ActionTypes } from '@/reducers/actions'

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
  const [dialogContent, setDialogContent] = useState<Video | undefined>()
  const [gallery, dispatch] = useReducer(videosReducer, videos)
  const { paginate, page, setPage, controls, controlsLength } =
    usePagination<Video>(gallery, 9)

  function handleChipsInput(chips: string[]) {
    setChips(chips)
    setPage(1)
    dispatch({
      type: ActionTypes.FILTER,
      payload: {
        filterBy: chips,
        initialState: videos,
      },
    })

    // Needed because I filter from initial state 😬
    // SORT keeps [gallery] on same order it was before filtering
    dispatch({ type: ActionTypes.SORT, payload: { orderBy } })
  }

  function handleSortInput(orderBy: string) {
    setOrderBy(orderBy)
    dispatch({
      type: ActionTypes.SORT,
      payload: { orderBy },
    })
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
          {paginate.map((content) => (
            <VideoCard
              key={content.id}
              content={content}
              setDialogOpen={setDialogContent}
            />
          ))}
        </MainContentGallery>
        <MainContentFooter>
          <div>
            <p>Página: </p>
            <Pagination
              range={controls}
              rangeTotalLength={controlsLength}
              page={page}
              setPage={setPage}
            />
          </div>
        </MainContentFooter>

        <VideoDialog
          content={dialogContent}
          onContentChange={setDialogContent}
        />
      </ContentBox>
    </MainContentContainer>
  )
}
