import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux'

import { filterChange } from '../../store/filterTicketsReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filterStops)

  return (
    <div className='avisales-filter'>
      <div className='filters-head'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <form>
        <ul className='inputs'>
          <li className='inputs-item'>
            <label className='check'>
              <input
                className='input all'
                type='checkbox'
                checked={filters.allChecked}
                onChange={() => dispatch(filterChange('allChecked'))}
              />
              <span className='checkbox' />
              Все
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input
                className='input zero'
                type='checkbox'
                checked={filters.noChecked}
                onChange={() => dispatch(filterChange('noChecked'))}
              />
              <span className='checkbox' />
              Без пересадок
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input
                className='input one'
                type='checkbox'
                checked={filters.oneChecked}
                onChange={() => dispatch(filterChange('oneChecked'))}
              />
              <span className='checkbox' />1 пересадка
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input
                className='input two'
                type='checkbox'
                checked={filters.twoChecked}
                onChange={() => dispatch(filterChange('twoChecked'))}
              />
              <span className='checkbox' />2 пересадки
            </label>
          </li>
          <li className='inputs-item'>
            <label className='check'>
              <input
                className='input three'
                type='checkbox'
                checked={filters.threeChecked}
                onChange={() => dispatch(filterChange('threeChecked'))}
              />
              <span className='checkbox' />3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Filter
