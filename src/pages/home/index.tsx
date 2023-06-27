import { MainContent } from './components/MainContent'
import { Video } from '@/types'
import { CallToAction } from './components/CallToAction'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title="Home"
        description="Menos conversinha, mais conversão. Conheça as estratégias que mudaram o jogo e como aplicá-las em seu negócio"
      />
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
