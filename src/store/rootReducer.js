import { combineReducers } from 'redux'

import { ticketsReducer } from './ticketsReducer'
import sortTicketsReducer from './sortTicketsReducer'
import filterTicketsReducer from './filterTicketsReducer'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sort: sortTicketsReducer,
  filterStops: filterTicketsReducer,
})

export default rootReducer
