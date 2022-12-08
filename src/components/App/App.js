import './App.css'

import TicketList from '../TicketList'
import Filter from '../Filter'

import Logo from './Logo.svg'

function App() {
  return (
    <div className='aviasales-app'>
      <img className='logotype' src={Logo} alt='' />
      <div className='main'>
        <Filter />
        <TicketList />
      </div>
    </div>
  )
}

export default App
