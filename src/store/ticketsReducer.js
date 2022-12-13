import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  tickets: [],
}

export const addTickets = createAction('ADD_TICKETS')

export default createReducer(initialState, {
  [addTickets]: function (state) {
    state.tickets.push(action.payload)
  },
})

console.log(addTickets)
