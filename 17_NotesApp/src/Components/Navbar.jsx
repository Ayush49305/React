import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = ({
  darkMode,
  setDarkMode
}) => {
  return (
    <div className={`flex justify-between items-center h-[90px] w-screen border-black ${darkMode ? "bg-gray-800 text-white ":"bg-white text-black "}`}>
      <div className='pl-5'>
        <h2 className='text-4xl'>Welcome,Ayush</h2>  
        {/* <p className='mt-1'>12 notes</p> */}

      </div>
      <div className='pr-120 mt-7'>
        <h2 className='text-4xl'>All Notes</h2>  
        <p className='mt-1'>08 notes</p>
      </div>
      <div className='relative mr-5 flex justify-center items-center gap-2'>
        <i className="ri-search-line absolute left-3 text-gray-500"></i>
        <input 
          type='text' 
          placeholder='Search Notes...'
          className={`border border-gray-500  h-10 w-80 pl-10 pr-4 outline-none rounded-lg ${darkMode ? "bg-gray-700 text-white  placeholder-white":"bg-white text-black placeholder-gray-500"}`}>       
        </input>
        
          <i className="ri-filter-line border border-gray-500 h-10 max-w-1 pl-6 pr-6 flex justify-center items-center outline-none rounded-lg"></i>
          <i className="ri-gallery-view-2 border border-gray-500 h-10 max-w-1 pl-6 pr-6 flex justify-center items-center outline-none rounded-lg"></i>
        
      </div>

      
    </div>
  )
}

export default Navbar
