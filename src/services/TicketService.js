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
    let notLastPackOfTickets = true
    try {
      while (notLastPackOfTickets) {
        /* eslint-disable no-await-in-loop */

        const ticketsRes = await fetch(newUrlTickets)
        if (ticketsRes.status !== 200) continue

        const { tickets, stop } = await ticketsRes.json()

        dispatch(getAllTickets(tickets))

        if (stop) notLastPackOfTickets = false
      }
    } catch (e) {
      alert(e.message)
    }
  }
}
