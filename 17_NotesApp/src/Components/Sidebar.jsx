import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-white h-[calc(100vh-90px)] w-[200px] p-3 '>
      <div className='flex items-center gap-2'>
        <i className="ri-booklet-line text-2xl bg-blue-700 h-10 max-w-1 pl-5 pr-5 flex justify-center items-center outline-none rounded-lg"></i>
        <h2 className='text-2xl text-blue-800'>Notes App</h2>
      </div>
      
      <div className='flex items-center h-10 max-w-110 m-2 mr-4 bg-blue-700 rounded-lg gap-2'>        
        <h4 className='text-4xl'>+</h4>
        <h5 className='text-2xl'> New Note</h5>
      </div>

      <div className='flex items-center gap-2'>
        <i className="ri-file-line text-2xl bg-blue-700 h-10 max-w-1 pl-5 pr-5 flex justify-center items-center outline-none rounded-lg"></i>
        <h2 className='text-2xl text-blue-800'>All Notes</h2>
      </div>

      <div className='flex items-center gap-2'>
        <i className="ri-booklet-line text-2xl bg-blue-700 h-10 max-w-1 pl-5 pr-5 flex justify-center items-center outline-none rounded-lg"></i>
        <h2 className='text-2xl text-blue-800'>Notes App</h2>
      </div>

      <div className='flex items-center gap-2'>
        <i className="ri-booklet-line text-2xl bg-blue-700 h-10 max-w-1 pl-5 pr-5 flex justify-center items-center outline-none rounded-lg"></i>
        <h2 className='text-2xl text-blue-800'>Categories</h2>
      </div>

    </div>
  )
}

export default Sidebar
