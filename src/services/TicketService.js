
import { getAllTickets } from '../store/ticketsSlice'

const apiBase = 'https://aviasales-test-api.kata.academy/'
export async function fetchSearchId() {
  let newUrl = new URL('search', apiBase)
  const req = await fetch(newUrl)
  const res = await req.json()
  console.log(res.searchId)
  return res.searchId
}

export function fetchTickets(searchId) {
  return async function (dispatch) {
    let newUrl = new URL('tickets', apiBase)
    newUrl.searchParams.set('searchId', searchId)
    const req = await fetch(newUrl)
    const { tickets, stop } = await req.json()
    return dispatch(getAllTickets(tickets))
  }
}
