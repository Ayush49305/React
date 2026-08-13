import React from 'react'
// import Home from './Home'

const NoteCard = ({title,content,category,date}) => {
  return (
    <div className='bg-violet-50 h-70 w-60 p-4 m-6 rounded-2xl'>
      <div className='flex justify-between mb-2'>
         <i className="ri-pushpin-2-fill text-2xl"></i>
         <i className="ri-more-2-line font-bold text-1xl"></i>
      </div>

      <h2 className="text-xl">{title}</h2>

      <ul className="text-sm space-y-1 text-gray-700 mt-2 font-medium">
        {content.map((item,index)=>(
          <li key={index}>*{item}</li>
        ))}
      </ul>

      <span className='inline-block bg-violet-200 text-violet-600 mt-3 px-2 py-1 rounded-full'>{category}</span>

      <p className='text-xs mt-4 text-gray-500'>
       {date}
      </p>


    </div>
  )
}

export default NoteCard



