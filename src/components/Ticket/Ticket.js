import React from 'react'

import { timeStart, timeFlight, timeEnd } from '../../utils/getTransformTime'

import styles from './Ticket.module.scss'

const Ticket = ({ price, after, idImg, before }) => {
  const getStops = (stop) => {
    if (stop === 0) return '0 ПЕРЕСАДОК'
    if (stop === 1) return '1 ПЕРЕСАДКА'
    return `${stop} ПЕРЕСАДКИ`
  }

  return (
    <div>
      <li className={styles.aviaSalesTicket}>
        {/*<Card className={styles.antCard}>*/}
        <div className={styles.tableHead}>
          <h1 className={styles.price}>{`${price} P`}</h1>
          <img className={styles.logo} src={`//pics.avs.io/99/36/${idImg}.png`} alt='logo' />
        </div>
        <div className={styles.table}>
          <div className='column-left'>
            <div className={styles.cell}>
              <div className={styles.grey}>
                {before.origin} - {before.destination}
              </div>
              <div className='item'>
                {timeStart(before.date)} - {timeEnd(before.date, before.duration)}
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.grey}>
                {after.origin} - {after.destination}
              </div>
              <div className='item'>
                {timeStart(after.date)} - {timeEnd(after.date, after.duration)}
              </div>
            </div>
          </div>
          <div className='column-center'>
            <div className={styles.cell}>
              <div className={styles.grey}>В ПУТИ</div>
              <div className='item'>{timeFlight(before.duration)}</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.grey}>В ПУТИ</div>
              <div className='item'>{timeFlight(after.duration)}</div>
            </div>
          </div>
          <div className='column-right'>
            <div className={styles.cell}>
              <div className={styles.grey}>{getStops(before.stops.length)}</div>
              <div className='item'>{before.stops.join(', ')}</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.grey}>{getStops(after.stops.length)}</div>
              <div className='item'>{after.stops.join(', ')}</div>
            </div>
          </div>
        </div>
        {/*</Card>*/}
      </li>
    </div>
  )
}

export default Ticket
