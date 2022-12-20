import React, { useEffect, useMemo, useState } from 'react'
import './TicketList.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'

import { sortCheap, sortFast, sortOptimum } from '../../store/sortTicketsReducer'
import Ticket from '../Ticket'
import { fetchSearchId, fetchTickets } from '../../services/TicketService'

const TicketList = () => {
  const id = localStorage.getItem('searchId')
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.tickets.tickets)

  const sorts = useSelector((state) => state.sort)
  const [activeButtons, setActiveButtons] = useState('cheap')

  const [ticketNum, setTicketNum] = useState(5)
  const packTickets = allTickets.slice(0, ticketNum)

  const sortTickets = (tickets, sort) => {
    allTickets.sort((a, b) => {
      if (sort === 'cheap') return a.price - b.price
      if (sort === 'fast') {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      }
      return (
        a.price -
        b.price +
        (a.segments[0].duration + a.segments[1].duration) -
        (b.segments[0].duration + b.segments[1].duration)
      )
    })
  }

  useMemo(() => sortTickets(allTickets, sorts), [allTickets, sorts])

  const getSearchId = () => {
    dispatch(fetchSearchId).then((id) => {
      localStorage.setItem('searchId', id)
    })
  }

  useEffect(() => {
    !id && getSearchId()
    dispatch(fetchTickets(id))
  }, [])

  console.log(allTickets)
  return (
    <div className='search-ticket'>
      <div className='search-ticket-buttons'>
        <button
          type='button'
          className={classnames('button', 'cheap', activeButtons === 'cheap' && 'selected')}
          onClick={() => {
            setActiveButtons('cheap')
            dispatch(sortCheap())
          }}
        >
          САМЫЙ ДЕШЕЫВЫЙ
        </button>
        <button
          type='button'
          className={classnames('button', 'fast', activeButtons === 'fast' && 'selected')}
          onClick={() => {
            setActiveButtons('fast')
            dispatch(sortFast())
          }}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          type='button'
          className={classnames('button', 'optimum', activeButtons === 'optimum' && 'selected')}
          onClick={() => {
            setActiveButtons('optimum')
            dispatch(sortOptimum())
          }}
        >
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
