import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import {
  PaginationButton,
  PaginationContainer,
  PaginationEdgeButton,
  PaginationPageList,
} from './styles'

interface PaginationProps {
  range: number[]
  rangeTotalLength: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export function Pagination({
  range,
  rangeTotalLength,
  page,
  setPage,
}: PaginationProps) {
  useEffect(() => {
    // Go to page 1 when filtering
    // It works only when the current page is out of range of the filtering result
    if (range.length <= 1 && page !== 1) {
      setPage(1)
    }
  }, [range, page, setPage])

  function handleSetPage(currentPage: number) {
    setPage(currentPage)
  }

  return (
    <PaginationContainer>
      <PaginationEdgeButton
        onEdge={page !== 1}
        disabled={page === 1}
        onClick={() => handleSetPage(--page)}
      >
        <CaretLeft size={24} weight="regular" />
      </PaginationEdgeButton>
      <PaginationPageList>
        {range.map((currentPage) => (
          <PaginationButton
            key={currentPage}
            active={page === currentPage}
            onClick={() => handleSetPage(currentPage)}
          >
            {currentPage}
          </PaginationButton>
        ))}
      </PaginationPageList>
      <PaginationEdgeButton
        onEdge={page !== rangeTotalLength && range.length > 1}
        disabled={page === rangeTotalLength || range.length <= 1}
        onClick={() => handleSetPage(++page)}
      >
        <CaretRight size={24} weight="regular" />
      </PaginationEdgeButton>
    </PaginationContainer>
  )
}
