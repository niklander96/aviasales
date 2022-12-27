import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { Spin } from 'antd'

import sortingTickets from '../../utils/sortedFunction'
import { sortCheap, sortFast, sortOptimum } from '../../store/sortTicketsReducer'
import Ticket from '../Ticket'
import { fetchTickets } from '../../services/TicketService'
import filtering from '../../utils/filteredFunction'

import styles from './TicketList.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.tickets.tickets)
  const loading = useSelector((state) => state.tickets.loading)
  const { allChecked, noChecked, oneChecked, twoChecked, threeChecked } = useSelector((state) => state.filterStops)
  const sorts = useSelector((state) => state.sort)
  const [activeButtons, setActiveButtons] = useState('cheap')

  const [ticketNum, setTicketNum] = useState(5)

  const sortedTickets = useMemo(() => sortingTickets(allTickets, sorts), [sorts, allTickets])

  const filterAndSortTickets = useMemo(() =>
    filtering(sortedTickets, allChecked, noChecked, oneChecked, twoChecked, threeChecked),
  )
  const packTickets = filterAndSortTickets.slice(0, ticketNum)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  return (
    <div>
      <div className={styles.searchTicket}>
        <div className={styles.searchTicketButtons}>
          <button
            type='button'
            className={classnames(styles.button, styles.cheap, activeButtons === 'cheap' && styles.selected)}
            onClick={() => {
              setActiveButtons('cheap')
              dispatch(sortCheap())
            }}
          >
            САМЫЙ ДЕШЕЫВЫЙ
          </button>
          <button
            type='button'
            className={classnames(styles.button, styles.fast, activeButtons === 'fast' && styles.selected)}
            onClick={() => {
              setActiveButtons('fast')
              dispatch(sortFast())
            }}
          >
            САМЫЙ БЫСТРЫЙ
          </button>
          <button
            type='button'
            className={classnames(styles.button, styles.optimum, activeButtons === 'optimum' && styles.selected)}
            onClick={() => {
              setActiveButtons('optimum')
              dispatch(sortOptimum())
            }}
          >
            ОПТИМАЛЬНЫЙ
          </button>
        </div>
        <ul className={styles.ticketList}>
          {loading && <Spin size='large' />}
          {!loading && filterAndSortTickets.length === 0 ? (
            <h2>Билетов не найдено</h2>
          ) : (
            packTickets.map((item) => (
              <Ticket
                key={`${item.carrier}.${item.price}.${item.segments[0].date}.${item.segments[1].date}.${item.segments[0].duration}.${item.segments[1].duration}`}
                price={item.price}
                idImg={item.carrier}
                before={item.segments[0]}
                after={item.segments[1]}
              />
            ))
          )}
        </ul>
        {!loading && filterAndSortTickets.length !== 0 && (
          <button
            type='button'
            className={styles.showMore}
            onClick={() => setTicketNum((prevTicketNum) => prevTicketNum + 5)}
          >
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        )}
      </div>
    </div>
  )
}

export default TicketList
