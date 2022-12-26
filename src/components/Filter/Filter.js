import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterChange } from '../../store/filterTicketsReducer'

import styles from './Filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filterStops)

  return (
    <div className={styles.aviaSalesFilter}>
      <div className={styles.filtersHead}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <form>
        <ul className={styles.inputs}>
          <li className={styles.inputsItem}>
            <label className={styles.check}>
              <input
                id='all'
                className={styles.input}
                type='checkbox'
                checked={filters.allChecked}
                onChange={() => dispatch(filterChange('allChecked'))}
              />
              <span className={styles.checkbox} />
              Все
            </label>
          </li>
          <li className={styles.inputsItem}>
            <label className={styles.check}>
              <input
                id='zero'
                className={styles.input}
                type='checkbox'
                checked={filters.noChecked}
                onChange={() => dispatch(filterChange('noChecked'))}
              />
              <span className={styles.checkbox} />
              Без пересадок
            </label>
          </li>
          <li className={styles.inputsItem}>
            <label className={styles.check}>
              <input
                id='one'
                className={styles.input}
                type='checkbox'
                checked={filters.oneChecked}
                onChange={() => dispatch(filterChange('oneChecked'))}
              />
              <span className={styles.checkbox} />1 пересадка
            </label>
          </li>
          <li className={styles.inputsItem}>
            <label className={styles.check}>
              <input
                id='two'
                className={styles.input}
                type='checkbox'
                checked={filters.twoChecked}
                onChange={() => dispatch(filterChange('twoChecked'))}
              />
              <span className={styles.checkbox} />2 пересадки
            </label>
          </li>
          <li className={styles.inputsItem}>
            <label className={styles.check}>
              <input
                id='three'
                className={styles.input}
                type='checkbox'
                checked={filters.threeChecked}
                onChange={() => dispatch(filterChange('threeChecked'))}
              />
              <span className={styles.checkbox} />3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Filter
