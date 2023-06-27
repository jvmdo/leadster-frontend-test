import { useState } from 'react'

function calculatePages(length: number, rowsPerPage: number) {
  return Array.from({ length: Math.ceil(length / rowsPerPage) }, (_, i) => ++i)
}

function sliceControls(currentPage: number, pages: number[], range = 3) {
  if (currentPage === pages[0]) {
    return pages.slice(0, range)
  } else if (currentPage >= pages.at(-2)!) {
    return pages.slice(-range, pages.length)
  }
  return pages.slice(currentPage - 1, currentPage + range - 1)
}

function sliceData<T>(data: T[], page: number, rowsPerPage: number) {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

export function usePagination<T>(data: T[], rowsPerPage: number) {
  const [page, setPage] = useState(1)

  const pages = calculatePages(data.length, rowsPerPage)

  const paginate = sliceData<T>(data, page, rowsPerPage)
  const controls = sliceControls(page, pages)
  const controlsLength = pages.length

  return {
    paginate,
    page,
    setPage,
    controls,
    controlsLength,
  }
}
