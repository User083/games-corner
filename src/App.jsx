import './App.css'
import { Home } from './components'

function App() {


  return (
    <div className='bg-black-100 px-20 py-10 h-full'>
    <h1 className='text-center font-bold text-3xl text-highlight'><span className='bg-primary py-1 px-1'>Games</span><span className='text-primary bg-white-100 py-1 px-1'>Corner</span></h1>
    <Home/>
    </div>
  )
}

export default App
