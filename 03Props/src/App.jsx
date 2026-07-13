import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Ayush raj' age={20} img="https://plus.unsplash.com/premium_photo-1769143714924-1d3a85cf335e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user='Amit Singh'age={24} img="https://images.unsplash.com/photo-1771226281089-771a31ff54d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5OXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user='Arnav Deep'age={23} img="https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5NnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App
