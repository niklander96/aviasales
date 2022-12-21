const initialState = {
  sort: 'cheap',
}

export const SORT_CHEAP = 'SORT_CHEAP'
export const SORT_FAST = 'SORT_FAST'
export const SORT_OPTIMUM = 'SORT_OPTIMUM'

function sortTicketsReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_CHEAP:
      return 'cheap'

    case SORT_FAST:
      return 'fast'

    case SORT_OPTIMUM:
      return 'optimum'

    default:
      return state
  }
}

export const sortCheap = (payload) => ({ type: SORT_CHEAP, payload })
export const sortFast = (payload) => ({ type: SORT_FAST, payload })
export const sortOptimum = (payload) => ({ type: SORT_OPTIMUM, payload })
export default sortTicketsReducer
