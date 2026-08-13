import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
// import NoteCard from './components/NoteCard'



const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex bg-white'>
        <Sidebar/>
        <Home/>
      </div>
    </div>
  )
}

export default App
