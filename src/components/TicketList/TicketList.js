import React from 'react'
import './TicketList.css'

import Ticket from '../Ticket'

const TicketList = () => {
  return (
    <div>
      <div className='aviasales-search-ticket-buttons'>
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
      <ul className='aviasales-ticket-list'>
        <Ticket />
      </ul>
    </div>
  )
}

export default TicketList
