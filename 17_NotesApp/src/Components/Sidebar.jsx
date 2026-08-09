import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-white h-[calc(100vh-90px)] w-[240px] p-3 '>
      <div className='flex items-center gap-2 mb-4'>
        <i className="ri-booklet-line text-2xl bg-violet-600 h-10 max-w-1 pl-5 pr-5 flex justify-center items-center outline-none rounded-lg"></i>
        <h2 className='text-xl font-semibold text-gray-800'>Notes App</h2>
      </div>
      
      <button className="w-full h-10 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-lg flex items-center             justify-center gap-2 mb-5">
        <i className="ri-add-line text-xl"></i>
        <span className="text-sm font-medium">New Note</span>
      </button>

      <div className="flex items-center justify-between bg-violet-50 rounded-lg px-3 h-10 mb-1">

        <div className="flex items-center gap-3">
          <i className="ri-file-line text-xl text-violet-600"></i>

          <span className="text-sm font-medium text-violet-600">
            All Notes
          </span>
        </div>

        <span className="bg-white text-violet-600 text-xs font-semibold rounded-full px-2 py-1">
          12
        </span>

      </div>


      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10 mb-1'>
        <div className='flex items-center gap-3'>
          <i className="ri-pushpin-line text-xl text-violet-600"></i>
          <span className='text-sm font-medium text-violet-600'>Pinned</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>5</span>
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10 mb-1'>
        <div className='flex items-center gap-3'>
          <i className="ri-delete-bin-line text-xl text-violet-600"></i>
          <span className='text-sm font-medium text-violet-600'>Trash</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>1</span>
      </div>

      <div className="flex justify-between items-center rounded-lg h-8 px-3">
        
          <p className="text-s font-light">CATEGORIES</p>
          <i className="ri-add-line"></i>
        
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10'>
        <div className='flex items-center gap-3'>
          <i className="ri-user-line text-xl text-black"></i>
          <span className='text-sm font-medium text-black'>Personal</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>4</span>
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10'>
        <div className='flex items-center gap-3'>
          <i className="ri-computer-line text-xl text-black"></i>
          <span className='text-sm font-medium text-black'>Work</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>4</span>
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10'>
        <div className='flex items-center gap-3'>
          <i className="ri-book-line text-xl text-black"></i>
          <span className='text-sm font-medium text-black'>Study</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>4</span>
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10'>
        <div className='flex items-center gap-3'>
          <i className="ri-lightbulb-fill text-xl text-black"></i>
          <span className='text-sm font-medium text-black'>ideas</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>2</span>
      </div>

      <div className='flex items-center justify-between bg-voilet-50 rounded-lg px-3 h-10 mb-10'>
        <div className='flex items-center gap-3'>
          <i className="ri-outlet-line text-xl text-black"></i>
          <span className='text-sm font-medium text-black'>Others</span>
        </div>

        <span className='bg-violet-50 text-voilet-600 text-xs font-semibold rounded-full px-2 py-1'>1</span>
      </div>



      <div className="flex items-center justify-between bg-violet-50 rounded-lg px-3 h-10 mb-7">

        <div className="flex items-center gap-3">
          <i className="ri-moon-line text-xl text-black-600"></i>

          <span className="text-sm font-medium text-black">
            Dark Mode
          </span>
        </div>

        <div className="w-11 h-6 bg-gray-300 rounded-full   p-1">
          <div className="w-4 h-4 bg-white rounded-full shadow-2xl"></div>
        </div>

      </div>

      <div className='flex justify-between items-center bg-violet-200 rounded-lg px-3 h-10 '>
        <div className=" flex justify-center items-center bg-violet-500 w-8 h-8 rounded-full shadow-2xl">A
        </div>
        <span className="pr-4">Ayush Raj</span>
        <i class="ri-arrow-down-s-line"></i>
      </div>

    </div>
  
  )
}

export default Sidebar
