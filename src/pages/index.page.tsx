import { GetStaticProps } from 'next'
import { HomeProps } from './home'
import {
  fetchFiltersOptions,
  fetchSortingOptions,
  fetchVideos,
} from '@/services/videos'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = Promise.all([
    fetchVideos(),
    fetchSortingOptions(),
    fetchFiltersOptions(),
  ])

  const [videos, sortingOptions, filtersOptions] = await response

  // This would be fetched as well
  const rating = 4.9

  return {
    props: {
      videos,
      sortingOptions,
      filtersOptions,
      rating,
    },
    revalidate: 1 * 60 * 60 * 24, // 24 hours
  }
}

// By exporting from `./home` directory, we tell Next.js
// that its index.jsx file is the home page
export { default } from './home'
