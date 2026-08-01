import React, { useContext } from 'react'
import userContext from '../contexts/userContext'

const Footer = () => {
  const {user,age,count}=useContext(userContext)
  return (
    <div className='h-[27.5] w-screen bg-amber-300'>
      <h2>Name:{user}</h2>
      <p>Age:{age}</p>
      <p>Count:{count}</p>
    </div>
  )
}

export default Footer
