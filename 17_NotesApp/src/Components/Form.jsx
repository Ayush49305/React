import React from 'react'

    const Form = ({
      title,
      setTitle,
      content,
      setContent,
      category,
      setCategory,
      handleAddNote,
      darkMode,
      setDarkMode,
      setShowForm
    }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
        
        <div className={`w-[500px] rounded-2xl p-6 shadow-2xl ${darkMode ? "bg-gray-600 text-white":"bg-white text-black "}`}>
            <button 
                onClick={()=>{
                    setTitle(""),
                    setContent(""),
                    setCategory(""),
                    setShowForm(false)

                }}
                className="ml-110 text-lg">X</button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                Create New Note
            </h2>

            <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Title'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-violet-500'
            />
                

            <textarea 
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                placeholder='Write your note...'
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none resize-none focus:ring-2 focus:ring-violet-500"
                >


            </textarea>

            <input
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                placeholder='category'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-violet-500'
            />

            <button
                onClick={handleAddNote}
                className='w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition'
            >
              Add Note
            </button>
        </div>
    </div>
  )
}

export default Form
