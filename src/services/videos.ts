import { Video } from '@/types'

function getBaseUrl(process: any) {
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    return 'https://leadster-jvmdo.vercel.app'
  }

  return 'http://localhost:3000'
}

export async function fetchVideos(): Promise<Video[]> {
  return await (await fetch(`${getBaseUrl(process)}/data/videos.json`)).json()
}

export async function fetchFiltersOptions() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 300 + 300))
  const filtersOptions = [
    'Agências',
    'Chatbot',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ]
  return filtersOptions
}

export async function fetchSortingOptions() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 300 + 300))
  const sortingOptions = ['Data de Publicação', 'A-Z']
  return sortingOptions
}
