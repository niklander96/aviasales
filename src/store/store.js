import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import { ticketsReducer } from './ticketsReducer'
import sortTicketsReducer from './sortTicketsReducer'
import filterTicketsReducer from './filterTicketsReducer'

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sort: sortTicketsReducer,
  filterStops: filterTicketsReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
