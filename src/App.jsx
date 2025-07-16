
import './App.css'
import Copyright from './components/copyright/Copyright'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navber from './components/navber/Navber'
import Newsletter from './components/newsletter/Newsletter'
import Players from './components/players/Players'

function App() {

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <Navber></Navber>
        <Header></Header>
        <Players></Players>
        
      </div>
      <div className='bg-[#060919] pt-50'>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
      <div className='bg-[#060919] border-t-1 border-gray-500'>
        <Copyright></Copyright>
      </div>
    </>
  )
}

export default App
