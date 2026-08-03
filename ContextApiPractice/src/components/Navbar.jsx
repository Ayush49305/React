import React from 'react'
import { useContext } from 'react'
import userContext from '../contexts/userContext'

const Navbar = () => {
  const {user,age,count,bgColor,textColor}=useContext(userContext)
  return (
    <div className=' text-4xl'
      style={{backgroundColor:bgColor,
        color:textColor}}
    >
      <h2>Name:{user}</h2>
      <p>Age:{age}</p>
      <p>Count:{count}</p>
      
    </div>
  )
}

export default Navbar
