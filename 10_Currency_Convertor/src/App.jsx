import React from 'react'

const App = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-screen bg-cover bg-center flex justify-center items-center'
        style={{backgroundImage:"url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>

      <div className='w-full max-w-md mx-auto border border-gray-500 rounded-2xl bg-white/20                backdrop-blur-sm p-5'>

      <div className='w-full mb-1'>
        <div className='w-full bg-white p-4 rounded-lg'>
          <div className='flex justify-between items-center'>
            <label className='text-gray-500 text-sm'>
              From
            </label>

            <p className='text-gray-500 text-sm'>
              currency Type
            </p>

          </div>

          <div className='flex justify-between items-center mt-4'>
            <input 
              type="number"
              placeholder='0'
              className='outline-none text-2xl font-medium w-1/2 bg-transparent'

            />

            <select className="bg-gray-100 rounded-lg px-3 py-2 outline-none">
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div className='relative-w-full h-0.5'>

      </div>

      <div className='w-full mt-1 mb-4'>
        <div className='w-full bg-white p-4 rounded-lg'>
          <div className='flex justify-between items-center'>
            <label className='text-gray-500 text-sm'>
              To
            </label>

            <p className='text-gray-500 text-sm'>
              currency Type
            </p>

          </div>

          <div className='flex justify-between items-center mt-4'>
            <input 
              type="number"
              placeholder='0'
              className='outline-none text-2xl font-medium w-1/2 bg-transparent'

            />

            <select className="bg-gray-100 rounded-lg px-3 py-2 outline-none">
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
            </select>
          </div>
        </div>

      </div>

      <button>Convert

      </button>



    </div>
    </div>
  </div>
    
  )
}

export default App

