import { Video } from '@/types'
import { ActionTypes } from './actions'
import { compareDesc } from 'date-fns'

export interface DispatchActions {
  type: ActionTypes
  payload: {
    orderBy?: string
    filterBy?: string[]
    initialState?: Video[]
  }
}

export function videosReducer(state: Video[], action: DispatchActions) {
  switch (action.type) {
    case ActionTypes.FILTER: {
      const { filterBy } = action.payload
      const { initialState } = action.payload

      if (!initialState) return []
      if (!filterBy?.length) return initialState

      return initialState.filter(({ categories }) =>
        categories.some((categories) => filterBy.includes(categories)),
      )
    }

    case ActionTypes.SORT: {
      const { orderBy } = action.payload

      // Array.prototype.toSorted() not available on Firefox yet 😪
      return [...state].sort((a, b) => {
        switch (orderBy) {
          case 'A-Z': {
            return a.title < b.title ? -1 : 1
          }

          default: {
            return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
          }
        }
      })
    }

    default: {
      console.error('Unknown action: ' + action.type)
      return state
    }
  }
}
