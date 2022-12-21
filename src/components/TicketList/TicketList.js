import React, { useEffect, useMemo, useState } from 'react'
import './TicketList.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'
import { Spin } from 'antd'

import { sortCheap, sortFast, sortOptimum } from '../../store/sortTicketsReducer'
import Ticket from '../Ticket'
import { fetchTickets } from '../../services/TicketService'

const TicketList = () => {
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.tickets.tickets)
  const loading = useSelector((state) => state.tickets.loading)
  const { allChecked, noChecked, oneChecked, twoChecked, threeChecked } = useSelector((state) => state.filterStops)
  const sorts = useSelector((state) => state.sort)
  const [activeButtons, setActiveButtons] = useState()

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

  const filterTickets = {
    sortTickets,
    allChecked,
    noChecked,
    oneChecked,
    twoChecked,
    threeChecked,
  }

  useMemo(() => sortTickets(allTickets, sorts), [allTickets, sorts])

  useEffect(() => {
    dispatch(fetchTickets())
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
        {loading && <Spin size='large' />}
        {!loading && filterTickets.length === 0 ? (
          <h2>Билетов не найдено</h2>
        ) : (
          packTickets.map((item) => (
            <Ticket
              key={uuidv4()}
              item={item}
              price={item.price}
              idImg={item.carrier}
              forward={item.segments[0]}
              backward={item.segments[1]}
            />
          ))
        )}
      </ul>
      {!loading && filterTickets.length !== 0 && (
        <button
          type='button'
          className='button show-more'
          onClick={() => setTicketNum((prevTicketNum) => prevTicketNum + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  )
}

export default TicketList
