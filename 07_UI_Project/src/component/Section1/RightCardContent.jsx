import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className=' text-2xl font-medium text-black h-10 w-10 flex justify-center items-center rounded-full  bg-white'>1</h2>
        
        <div>
          <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur, porro aut ea in accusantium.</p>

          <div className='flex justify-between'>
            <button className='text-white bg-blue-600 px-8 py-2 rounded-full '>Satisfied</button>
            <button className='text-white bg-blue-600 px-4 py-3 flex rounded-full '> <i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>  
  )
}

export default RightCardContent
