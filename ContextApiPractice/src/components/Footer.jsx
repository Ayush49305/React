import React, { useContext } from 'react'
import userContext from '../contexts/userContext'

const Footer = () => {
  const {user,age,count,bgColor,textColor}=useContext(userContext)
  return (
    <div className='h-[27.5] w-screen'
    style={{
      backgroundColor:bgColor,
      color:textColor
    }}
    >
      <h2>Name:{user}</h2>
      <p>Age:{age}</p>
      <p>Count:{count}</p>
    </div>
  )
}

export default Footer
