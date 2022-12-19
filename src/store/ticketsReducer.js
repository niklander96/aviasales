const initialState = {
  loading: true,
  tickets: [],
}
export const GET_FIRST_TICKETS = 'GET_FIRST_TICKETS'
export const GET_ALL_TICKETS = 'GET_ALL_TICKETS'

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      }

    case GET_ALL_TICKETS:
      return {
        tickets: [...state.tickets, ...action.payload],
        loading: false,
      }

    default:
      return state
  }
}


