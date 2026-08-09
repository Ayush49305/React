import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import NoteCard from './Components/NoteCard'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <NoteCard/>
    </div>
  )
}

export default App
