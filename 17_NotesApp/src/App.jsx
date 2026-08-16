import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
// import NoteCard from './components/NoteCard'



const App = () => {
  const [showForm,setShowForm]=useState(false)
  return (
    <div>
      <Navbar/>
      <div className='flex bg-white'>
        <Sidebar setShowForm={setShowForm}/>
        <Home showForm={showForm} setShowForm={setShowForm}/>
      </div>
    </div>
  )
}

export default App
