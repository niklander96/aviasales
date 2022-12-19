import React from 'react'
import { Card } from 'antd'
import './Ticket.css'

const Ticket = ({ price, backward, idImg, forward }) => {
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
                {forward.origin} - {forward.destination}
              </div>
              <div className='item'>10:45 - 08:00</div>
            </div>
            <div className='cell'>
              <div className='item grey'>
                {backward.origin} - {backward.destination}
              </div>
              <div className='item'>11:20 - 00:50</div>
            </div>
          </div>
          <div className='column-center'>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>{forward.duration}</div>
            </div>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>{backward.duration}</div>
            </div>
          </div>
          <div className='column-right'>
            <div className='cell'>
              <div className='item grey'>{getStops(forward.stops.length)}</div>
              <div className='item'>{forward.stops.join(', ')}</div>
            </div>
            <div className='cell'>
              <div className='item grey'>{getStops(backward.stops.length)}</div>
              <div className='item'>{backward.stops.join(', ')}</div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  )
}

export default Ticket
