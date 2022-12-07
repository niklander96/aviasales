import './App.css'
import TicketList from '../TicketList'
import Filter from '../Filter'

function App() {
  return (
    <div className='aviasales-app'>
      <div className='logo-container'>
        <img className='logotype' src='' alt='' />
      </div>
      <Filter />
      <TicketList />
    </div>
  )
}

export default App
