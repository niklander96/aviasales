import { GET_ALL_TICKETS, GET_FIRST_TICKETS } from '../ticketsReducer'

export const getFirstTickets = (payload) => ({ type: GET_FIRST_TICKETS, payload })
export const getAllTickets = (payload) => ({ type: GET_ALL_TICKETS, payload })