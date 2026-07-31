import React, { useState } from 'react'
import userContext from './contexts/userContext'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
const App = () => {

  const [user,setUser]=useState("Guest")

  return (
    <div className="h-full w-screen">
    <userContext.Provider value={{user,setUser}}>
        <Navbar/>
        <Profile/>
        <div className='flex justify-center items-center'>
          <button className='bg-blue-600 px-8'
          onClick={()=>setUser("Ayush")}
          >Login
            
          </button>
        </div>
        
      </userContext.Provider>
    </div>
  )
}

export default App
