import React from 'react'
import { useContext } from 'react'
import userContext from '../contexts/userContext'

const Navbar = () => {
  const {user}=useContext(userContext)
  return (
    <div className='bg-red-500 text-4xl'>
      <h2>Name:{user}</h2>
      
    </div>
  )

}

export default Navbar
