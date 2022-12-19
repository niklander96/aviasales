import './App.css'
import { useDispatch, useSelector } from 'react-redux'

import TicketList from '../TicketList'
import Filter from '../Filter'
import Logo from '../img/Logo.svg'

function App() {
  return (
    <div className='aviasales-app'>
      <img className='logotype' src={Logo} alt='logo' />
      <div className='main'>
        <Filter />
        <TicketList />
      </div>
    </div>
  )
}

export default App
