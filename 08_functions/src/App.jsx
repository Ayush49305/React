import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log("Button is clicked");
  // }
  return (
    <div className='bg-black'>
      <input onChange={()=>{
        console.log("User is Typing");
      }}
      type="text" placeholder='Enter Name:' />
    </div>
  )
} 

export default App
