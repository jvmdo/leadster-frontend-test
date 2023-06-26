import { useState, useEffect } from 'react'

function generateRange(length: number, rowsPerPage: number) {
  return Array.from({ length: Math.ceil(length / rowsPerPage) }, (_, i) => ++i)
}

function sliceRange(currentPage: number, range: number[], slice = 3) {
  if (currentPage === range.at(0)! - 1) {
    return range.slice(0, slice)
  } else if (currentPage === range.at(-1)! - 1) {
    return range.slice(-slice, range.length)
  }
  return range.slice(currentPage - 1, currentPage + slice - 1)
}

function sliceData<T>(data: T[], page: number, rowsPerPage: number) {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

export function usePagination<T>(data: T[], page: number, rowsPerPage: number) {
  const [pageRange, setPageRange] = useState<number[]>([])
  const [slice, setSlice] = useState<T[]>([])

  useEffect(() => {
    const range = generateRange(data.length, rowsPerPage)
    setPageRange([...range])

    const slice = sliceData<T>(data, page, rowsPerPage)
    setSlice([...slice])

    // document.querySelector('.main-content')?.scrollTop = 0
  }, [data, setPageRange, page, setSlice, rowsPerPage])

  return {
    slice,
    range: sliceRange(page - 1, pageRange),
    rangeLength: pageRange.length,
  }
}
