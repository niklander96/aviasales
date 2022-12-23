import React, { useEffect, useMemo, useState } from 'react'
import './TicketList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'
import { Spin } from 'antd'

import sortingTickets from '../../functions/sortedFunction'
import { sortCheap, sortFast, sortOptimum } from '../../store/sortTicketsReducer'
import Ticket from '../Ticket'
import { fetchTickets } from '../../services/TicketService'
import filtering from '../../functions/filteredFunction'

const TicketList = () => {
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.tickets.tickets)
  const loading = useSelector((state) => state.tickets.loading)
  const { allChecked, noChecked, oneChecked, twoChecked, threeChecked } = useSelector((state) => state.filterStops)
  const sorts = useSelector((state) => state.sort)
  const [activeButtons, setActiveButtons] = useState('cheap')

  const [ticketNum, setTicketNum] = useState(5)

  const sortedTickets = useMemo(() => sortingTickets(allTickets, sorts), [sorts, allTickets])

  const filterAndSortTickets = filtering(sortedTickets, allChecked, noChecked, oneChecked, twoChecked, threeChecked)
  const packTickets = filterAndSortTickets.slice(0, ticketNum)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

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
        {!loading && filterAndSortTickets.length === 0 ? (
          <h2>Билетов не найдено</h2>
        ) : (
          packTickets.map((item) => (
            <Ticket
              key={uuidv4()}
              item={item}
              price={item.price}
              idImg={item.carrier}
              before={item.segments[0]}
              after={item.segments[1]}
            />
          ))
        )}
      </ul>
      {!loading && filterAndSortTickets.length !== 0 && (
        <button type='button' className='show-more' onClick={() => setTicketNum((prevTicketNum) => prevTicketNum + 5)}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  )
}

export default TicketList
