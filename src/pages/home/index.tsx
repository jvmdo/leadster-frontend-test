import { MainContent } from './components/MainContent'
import { Video } from '@/types'
import { CallToAction } from './components/CallToAction'

export interface HomeProps {
  videos: Video[]
  filtersOptions: string[]
  sortingOptions: string[]
  rating: number
}

export default function Home({
  videos,
  filtersOptions,
  sortingOptions,
  rating,
}: HomeProps) {
  return (
    <>
      <MainContent
        filterItems={filtersOptions}
        sortItems={sortingOptions}
        videos={videos}
      />
      <CallToAction rating={rating} />
    </>
  )
}

// See pages/index.page.tsx
