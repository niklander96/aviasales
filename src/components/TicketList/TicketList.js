import React, { useEffect } from 'react'
import './TicketList.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../Ticket'
import { fetchSearchId, fetchTickets } from '../../services/TicketService'

const TicketList = () => {
  const id = localStorage.getItem('searchId')
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const getTicket = dispatch(fetchTickets(id))

  const getSearchId = () => {
    dispatch(fetchSearchId).then((id) => {
      localStorage.setItem('searchId', id)
    })
  }

  // const getTickets = () => {
  //   dispatch()
  // }
  useEffect(() => {
    !id && getSearchId()
    dispatch(fetchTickets(id))
  }, [])
  return (
    <div className='search-ticket'>
      <div className='search-ticket-buttons'>
        <button type='button' className='button cheap selected'>
          САМЫЙ ДЕШЕЫВЫЙ
        </button>
        <button type='button' className='button fast'>
          САМЫЙ БЫСТРЫЙ
        </button>
        <button type='button' className='button optimum'>
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      <ul className='ticket-list'>
        {tickets.map((ticket) => {
          ticket.tickets.map((item) => {
            console.log(item)
            return item
          })
          return (
            <div className='ticket' key={uuidv4()}>
              <Ticket />
            </div>
          )
        })}
      </ul>
      <div>
        <button type='button' className=' button show-more'>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  )
}

export default TicketList
