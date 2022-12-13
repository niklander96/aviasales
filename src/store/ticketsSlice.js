import { createSlice } from '@reduxjs/toolkit'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    count: 0,
    tickets: [],
    stop: false,
  },
  reducers: {
    addTickets(state, action) {
      state.tickets.push(action.payload)
    },
    onStop(state, action) {
      state.stop = !action.payload
    },
  },
})

export default ticketsSlice.reducer
export const { addTickets } = ticketsSlice.actions
export const { onStop } = ticketsSlice.actions
