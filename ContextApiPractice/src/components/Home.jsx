import React, { useContext } from 'react'
import userContext from '../contexts/userContext'

const Home = () => {
  
  const {user,setUser,age,setAge,count,setCount,bgColor,setBgColor,textColor,setTextColor}=useContext(userContext)
  return (
    <div className='flex justify-center items-center h-95 w-screen'
      style={{
        backgroundColor:bgColor,
        color:textColor
      }}
    >
      <div className='flex justify-center items-center'>
          
          <button className='bg-green-700 px-8'
            onClick={()=>{
              setUser("Ayush");
              setAge(21)
            }}
            >Login          
          </button>

          <button className='bg-blue-700 px-8 ml-2'
            onClick={()=>{
              setUser("Guest");
              setAge(0)
            }}
            >Logout
          </button>
        </div>

        <div className='flex justify-center items-center'>
          
          <button className='bg-purple-700 px-8 ml-2'
            onClick={()=>{
              setCount(count+1);
              
            }}
            >Increase Count          
          </button>

          <button className='bg-amber-950 px-8 ml-2'
            onClick={()=>{
              setCount(count-1);
              
            }}
            >Decrease Count
          </button>

          <button onClick={()=>{
              setBgColor("black")
              setTextColor("white")
          
            }}
          
              className='text-white bg-sky-600 px-8 ml-2'
            
              style={{backgroundColor:"red",color:'white'}} 
            
            >Dark Mode
          </button>

          <button onClick={()=>{
              setBgColor("white")
              setTextColor("black")
          
            }}
          
              className='text-white px-8 ml-2'
            
              style={{backgroundColor:"orange",color:'black'}} 
            
            >light Mode
          </button>

          
        </div>
    
    </div>
  )
}

export default Home
