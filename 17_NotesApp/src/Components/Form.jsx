import React, { useState } from 'react'

const Form = () => {

    const[title,setTitle]=useState("")
    const[content,setContent]=useState("")
  return (
    <div>
        <input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Title'/>

        <textarea 
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder='Content'>

        </textarea>

        <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            placeholder='category'
        />
            
        <button
        onClick={handleAddNote}
        >Add Note</button>
      
    </div>
  )
}

export default Form
