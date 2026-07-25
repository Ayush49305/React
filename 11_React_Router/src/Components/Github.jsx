import React, { useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData() 
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ayush49305')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center bg-gray-600 m-4 text-white text-3xl p-4'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Ayush49305')
    return response.json()
}
