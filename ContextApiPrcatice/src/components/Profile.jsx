import React, { useContext } from 'react'
import userContext from '../contexts/userContext'

const profile = () => {
  const {user}=useContext(userContext)
  return (
    <div className='h-5 max-w-4xl bg-amber-900'>
      Profile:{user}
    </div>
  )
}

export default profile
