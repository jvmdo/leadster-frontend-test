import path from 'path'
import { promises as fs } from 'fs'
import { Video } from '@/types'

export async function fetchVideos(): Promise<Video[]> {
  try {
    const filePath = path.join(process.cwd(), 'public/data/videos.json')
    const jsonContent = await fs.readFile(filePath, 'utf-8')
    const videos = JSON.parse(jsonContent)

    return videos
  } catch (error) {
    console.error(error)
  }

  return []
}

export async function fetchFiltersOptions() {
  // This delay does not affect the user since this function will not run on request
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
