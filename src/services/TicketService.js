import { addTickets, onStop } from '../store/ticketsSlice'

const apiBase = 'https://aviasales-test-api.kata.academy/'
export async function fetchSearchId() {
  let newUrl = new URL('search', apiBase)
  const req = await fetch(newUrl)
  const res = await req.json()
  console.log(res.searchId)
  return res.searchId
}

export function fetchTickets(searchId) {
  return function (dispatch) {
    let newUrl = new URL('tickets', apiBase)
    newUrl.searchParams.set('searchId', searchId)
    fetch(newUrl)
      .then((res) => res.json())
      .then((json) => dispatch(addTickets(json)))
  }
}
