import './App.css'

import TicketList from '../TicketList'
import Filter from '../Filter'

import Logo from './Logo.svg'

function App() {
  return (
    <div className='aviasales-app'>
      <div className='logo-container'>
        <img className='logotype' src={Logo} alt='' />
      </div>
      <Filter />
      <TicketList />
    </div>
  )
}

export default App
