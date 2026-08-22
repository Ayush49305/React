import React from 'react'
// import Home from './Home'

const NoteCard = ({title,content,category,date,darkMode,setDarkMode,pinned,onPin}) => {
  return (
    <div className={`h-70 w-60 p-4 m-6 rounded-2xl ${darkMode ? "bg-gray-900 text-white":"bg-violet-50 text-black"}`}>
      <div className='flex justify-between mb-2'>
         <i
          onClick={onPin} 
          className={`ri-pushpin-2-fill text-2xl ${pinned ? "text-violet-600":"text-gray-400"}`}></i>
         <i className="ri-more-2-line font-bold text-1xl"></i>
      </div>

      <h2 className="text-xl">{title}</h2>

      <ul className={`text-sm space-y-1 mt-2 font-medium ${darkMode ? "text-gray-200":"text-gray-700"}`}>
        {content.map((item,index)=>(
          <li key={index}>*  {item}</li>
        ))}
      </ul>

      <span className='inline-block bg-violet-200 text-violet-600 mt-3 px-2 py-1 rounded-full'>{category}</span>

      <p className={`text-xs mt-4 ${darkMode ? "text-gray-300":"text-gray-500"}`}>
       {date}
      </p>


    </div>
  )
}

export default NoteCard



