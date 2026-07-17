import React from 'react'
import 'remixicon/fonts/remixicon.css'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className=' text-2xl font-medium text-black h-10 w-10 flex justify-center items-center rounded-full  bg-white'>{props.id+1}</h2>
        
        <div>
          <p className='text-lg leading-relaxed text-white mb-14 text-shadow-lg'>{props.intro}</p>

          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white px-8 py-2 rounded-full '>{props.tag}</button>
            <button className='text-white px-4 py-3 flex rounded-full '> <i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>  
  )
}

export default RightCardContent
