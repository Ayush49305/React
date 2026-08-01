import React, { useState } from 'react'
import userContext from './contexts/userContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
const App = () => {

  const [user,setUser]=useState("Guest")
  const [age,setAge]=useState(0)
  const [count,setCount]=useState(0)

  return (
    <div className="h-full w-screen">
    <userContext.Provider value={{user,setUser,age,setAge,count,setCount}}>
        <Navbar/>
       <Home/>
       <Footer/>
        
        
      </userContext.Provider>
    </div>
  )
}

export default App
