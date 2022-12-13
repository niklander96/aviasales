import { configureStore, combineReducers } from '@reduxjs/toolkit'

import ticketsSlice from './ticketsSlice'

const rootReducer = combineReducers({
  tickets: ticketsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
