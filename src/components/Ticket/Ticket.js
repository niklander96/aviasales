import React from 'react'
import { Card } from 'antd'

import { timeStart, timeFlight, timeEnd } from '../../functions/getTransformTime'
import './Ticket.css'

const Ticket = ({ price, after, idImg, before }) => {
  const getStops = (stop) => {
    if (stop === 0) return '0 ПЕРЕСАДОК'
    if (stop === 1) return '1 ПЕРЕСАДКА'
    return `${stop} ПЕРЕСАДКИ`
  }

  return (
    <li className='aviasales-ticket'>
      <Card>
        <div className='table-head'>
          <h1 className='price'>{`${price} P`}</h1>
          <img className='logo' src={`//pics.avs.io/99/36/${idImg}.png`} alt='logo' />
        </div>
        <div className='table'>
          <div className='column-left'>
            <div className='cell'>
              <div className='item grey'>
                {before.origin} - {before.destination}
              </div>
              <div className='item'>
                {timeStart(before.date)} - {timeEnd(before.date, before.duration)}
              </div>
            </div>
            <div className='cell'>
              <div className='item grey'>
                {after.origin} - {after.destination}
              </div>
              <div className='item'>
                {timeStart(after.date)} - {timeEnd(after.date, after.duration)}
              </div>
            </div>
          </div>
          <div className='column-center'>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>{timeFlight(before.duration)}</div>
            </div>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>{timeFlight(after.duration)}</div>
            </div>
          </div>
          <div className='column-right'>
            <div className='cell'>
              <div className='item grey'>{getStops(before.stops.length)}</div>
              <div className='item'>{before.stops.join(', ')}</div>
            </div>
            <div className='cell'>
              <div className='item grey'>{getStops(after.stops.length)}</div>
              <div className='item'>{after.stops.join(', ')}</div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  )
}

export default Ticket
