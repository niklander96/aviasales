import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='avisales-filter'>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form>
        <ul className='inputs'>
          <li>
            <input id='input-all' type='checkbox' />
            <label htmlFor='input-all'>Все</label>
          </li>
          <li>
            <input id='input-0' type='checkbox' />
            <label htmlFor='input-0'>Без пересадок</label>
          </li>
          <li>
            <input id='input-1' type='checkbox' />
            <label htmlFor='input-1'>1 пересадка</label>
          </li>
          <li>
            <input id='input-2' type='checkbox' />
            <label htmlFor='input-2'>2 пересадки</label>
          </li>
          <li>
            <input id='input-3' type='checkbox' />
            <label htmlFor='input-3'>3 пересадки</label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Filter
