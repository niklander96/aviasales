import { getAllTickets, getFirstTickets } from '../store/ticketsReducer'

const apiBase = 'https://aviasales-test-api.kata.academy/'

export function fetchTickets() {
  return async function (dispatch) {
    let searchIdent
    let newUrlId = new URL('search', apiBase)
    try {
      const resId = await fetch(newUrlId)
      if (!resId.ok) throw new Error('search id is not found')
      const { searchId } = await resId.json()
      searchIdent = searchId
    } catch (e) {
      alert(e.message)
    }

    let newUrlTickets = new URL('tickets', apiBase)
    newUrlTickets.searchParams.set('searchId', searchIdent)
    let firstPackOfTickets = false
    let notLastPackOfTickets = true
    try {
      while (notLastPackOfTickets) {
        /* eslint-disable no-await-in-loop */

        const ticketsRes = await fetch(newUrlTickets)
        if (ticketsRes.status !== 200) continue

        const { tickets, stop } = await ticketsRes.json()

        if (!firstPackOfTickets) {
          firstPackOfTickets = true
          dispatch(getFirstTickets(tickets))
        }
        if (stop) {
          notLastPackOfTickets = false
          dispatch(getAllTickets(tickets))
        }
        if (!ticketsRes.ok) throw new Error('Failed to searched tickets')
      }
    } catch (e) {
      alert(e.message)
    }
  }
}
