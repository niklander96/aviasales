import { createSlice } from '@reduxjs/toolkit'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    count: 0,
    tickets: [],
    stop: false,
  },
  reducers: {
    getAllTickets(state, action) {
      state.tickets.push(...action.payload)
    },
    onStop(state, action) {
      state.stop = !action.payload
    },
  },
})

export default ticketsSlice.reducer
export const { getAllTickets } = ticketsSlice.actions
export const { onStop } = ticketsSlice.actions
