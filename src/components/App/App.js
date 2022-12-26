import TicketList from '../TicketList'
import Filter from '../Filter'
import Logo from '../../img/Logo.svg'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.aviaSalesApp}>
      <img className={styles.logotype} src={Logo} alt='logo' />
      <div className={styles.main}>
        <Filter />
        <TicketList />
      </div>
    </div>
  )
}

export default App
