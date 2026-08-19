import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
// import NoteCard from './components/NoteCard'



const App = () => {
  const [showForm,setShowForm]=useState(false)
  const[darkMode,setDarkMode]=useState(false)
  const[search,setSearch]=useState("")
  return (
    <div className={darkMode ? "bg-gray-700 text-white min-h-sceen":"bg-white text-black min-h-screen"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
      />
      <div className={`flex ${darkMode ? "bg-gray-900 text-white":"bg-white text-black"}`}>
        <Sidebar 
          setShowForm={setShowForm}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Home 
          showForm={showForm}
          setShowForm={setShowForm}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
        />
      </div>
    </div>
  )
}

export default App
