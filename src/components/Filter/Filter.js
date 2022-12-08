import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='avisales-filter'>
      <div className='filters-head'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <form>
        <ul className='inputs'>
          <li className='inputs-item'>
            <label className='check'>
              <input className='input all' type='checkbox' />
              <span className='checkbox'></span>
              Все
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input className='input zero' type='checkbox' />
              <span className='checkbox'></span>
              Без пересадок
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input className='input one' type='checkbox' />
              <span className='checkbox'></span>1 пересадка
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input className='input two' type='checkbox' />
              <span className='checkbox'></span>2 пересадки
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input className='input three' type='checkbox' />
              <span className='checkbox'></span>3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Filter
