
import './App.css'
import Header from './components/header/Header'
import Navber from './components/navber/Navber'
import Players from './components/players/Players'

function App() {

  return (
    <div className='w-4/5 mx-auto'>
      <Navber></Navber>
      <Header></Header>
      <Players></Players>
    </div>
  )
}

export default App
