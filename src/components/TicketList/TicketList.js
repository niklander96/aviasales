import React, { useEffect, useState } from 'react'
import './TicketList.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../Ticket'
import { fetchSearchId, fetchTickets } from '../../services/TicketService'
import { ticketsReducer } from "../../store/ticketsReducer"

const TicketList = () => {
  const id = localStorage.getItem('searchId')
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.tickets.tickets)
  const [item, setItem] = useState()

  const getSearchId = () => {
    dispatch(fetchSearchId).then((id) => {
      localStorage.setItem('searchId', id)
    })
  }
  const [ticketNum, setTicketNum] = useState(5)
  const packTickets = allTickets.slice(0, ticketNum)

  useEffect(() => {
    !id && getSearchId()
    dispatch(fetchTickets(id))
  }, [])

  console.log(allTickets)
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
        {packTickets.map((item) => (
          <Ticket
            key={uuidv4()}
            item={item}
            price={item.price}
            idImg={item.carrier}
            forward={item.segments[0]}
            backward={item.segments[1]}
          />
        ))}
      </ul>
      <div>
        <button
          type='button'
          className='button show-more'
          onClick={() => setTicketNum((prevTicketNum) => prevTicketNum + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  )
}

export default TicketList

// return (
//   <div className='ticket' key={uuidv4()}>
//     <Ticket
//       key={uuidv4()}
//       price={item.price}
//       idImg={item.carrier}
//       // forward={item.segments[0]}
//       // backward={item.segments[1]}
//     /></div>)
