import { getAllTickets, getFirstTickets } from '../store/ticketsReducer'

const apiBase = 'https://aviasales-test-api.kata.academy/'

export function fetchTickets() {
  return async function (dispatch) {
    const allTickets = []
    let newUrlId = new URL('search', apiBase)
    const resId = await fetch(newUrlId)
    if (!resId.ok) alert('searchId is not found')
    const { searchId } = await resId.json()

    let newUrlTickets = new URL('tickets', apiBase)
    newUrlTickets.searchParams.set('searchId', searchId)
    let firstPackOfTickets = false
    let notLastPackOfTickets = true

    while (notLastPackOfTickets) {
      /* eslint-disable no-await-in-loop */

      const ticketsRes = await fetch(newUrlTickets)
      if (!ticketsRes.ok) alert('Failed to load tickets')
      if (ticketsRes.status !== 200) continue

      const { tickets, stop } = await ticketsRes.json()

      if (!firstPackOfTickets) {
        firstPackOfTickets = true
        dispatch(getFirstTickets(tickets))
      }

      allTickets.push(...tickets)
      if (stop) notLastPackOfTickets = false
    }
    return dispatch(getAllTickets(allTickets))
  }
}
