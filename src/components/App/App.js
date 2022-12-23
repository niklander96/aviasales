import './App.scss'

import TicketList from '../TicketList'
import Filter from '../Filter'
import Logo from '../img/Logo.svg'

function App() {
  return (
    <div className='aviaSales-app'>
      <img className='logotype' src={Logo} alt='logo' />
      <div className='main'>
        <Filter />
        <TicketList />
      </div>
    </div>
  )
}

export default App
