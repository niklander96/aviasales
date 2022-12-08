import React from 'react'
import { Card } from 'antd'
import './Ticket.css'

const Ticket = () => {
  return (
    <li className='aviasales-ticket'>
      <Card>
        <div className='table-head'>
          <h1 className='price'>13 400 Р</h1>
          <img className='logo' src='' alt='logo' />
        </div>
        <div className='table'>
          <div className='column-left'>
            <div className='cell'>
              <div className='item grey'>MOW-HKT</div>
              <div className='item'>10:45 - 08:00</div>
            </div>
            <div className='cell'>
              <div className='item grey'>MOW-HKT</div>
              <div className='item'>11:20 - 00:50</div>
            </div>
          </div>
          <div className='column-center'>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>21ч 15м</div>
            </div>
            <div className='cell'>
              <div className='item grey'>В ПУТИ</div>
              <div className='item'>13ч 30м</div>
            </div>
          </div>
          <div className='column-right'>
            <div className='cell'>
              <div className='item grey'>2 ПЕРЕСАДКИ</div>
              <div className='item'>HKG, JNB</div>
            </div>
            <div className='cell'>
              <div className='item grey'>1 ПЕРЕСАДКА</div>
              <div className='item'>HKG</div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  )
}

export default Ticket
