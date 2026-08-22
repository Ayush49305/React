import React, { useState } from 'react'
import NoteCard from './NoteCard'
import Form from './Form'

const Home = ({
  showForm,
  setShowForm,
  darkMode,
  setDarkMode,
  search
}) => {

  
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [category,setCategory]=useState("")

  const[notes,setNotes]=useState([
    {
      title:"React Project Ideas",
      content:[
        "Notes App",
        "Expense Tracker",
        "Weather Dashboard",
        "E-commerce Store",
      ],
      category:"Ideas",
      date:"August 12, 2026 • 10:30 AM",
      pinned:false,
    },

     {
    title: "Study Plan",
    content: [
      "Arrays",
      "Linked List",
      "Stack & Queue",
      "Trees",
      
    ],
    category: "Study",
    date: "August 12, 2026 • 09:15 AM",
    pinned:false,
  },

  {
    title: "Daily Goals",
    content: [
      "30 min coding",
      "React project",
      "Read a book",
      "Workout",
    ],
    category: "Personal",
    date: "August 11, 2026 • 08:45 PM",
    pinned:false,
  },

  {
    title: "Meeting Notes",
    content: [
      "Discuss requirements",
      "Timeline planning",
      "Assign tasks",
      "Verify Presentation"
    ],
    category: "Work",
    date: "August 11, 2026 • 04:20 PM",
    pinned:false,
  },

  {
    title: "Grocery List",
    content: [
      "Milk",
      "Eggs",
      "Bread",
      "Fruits",
      
    ],
    category: "Personal",
    date: "August 11, 2026 • 11:30 AM",
    pinned:false,
  },

  {
    title: "Book Recommendations",
    content: [
      "Atomic Habits",
      "The 5 AM Club",
      
      "Rich Dad Poor Dad",
    ],
    category: "Study",
    date: "August 10, 2026 • 07:10 PM",
    pinned:false,
  },

  {
    title: "Travel Plans",
    content: [
      "Manali",
      "Goa",
      "Ladakh",
      "Shimla"
    ],
    category: "Ideas",
    date: "August 10, 2026 • 02:45 PM",
    pinned:false,
  },

  {
    title: "Fitness Notes",
    content: [
      "Push Day",
      "Pull Day",
      "Leg Day",
      "Cardio",
    ],
    category: "Personal",
    date: "August 09, 2026 • 06:30 PM",
    pinned:false,
  },

  ])

  const handleAddNote = () => {
    if (!title.trim() || !content.trim() || !category.trim()) {
    alert("Please fill all fields")
    return
  }

  


  const newNote = {
    title: title,
    content: content.split("\n").filter(item => item.trim() !== ""),
    category: category,
    date: new Date().toLocaleString(),
    pinned:false
  }

  

  setNotes([newNote, ...notes])

  setTitle("")
  setContent("")
  setCategory("")

  setShowForm(false)
}

const handlePinNote = (index) => {
  setNotes(
    notes.map((note, i) =>
      i === index
        ? { ...note, pinned: !note.pinned }
        : note
    )
  )
}

  const filteredNotes = notes.filter((note) =>
  (note.title || "").toLowerCase().includes((search || "").toLowerCase())
)

  return (
    <div className={`flex-1 grid p-5 ${darkMode ? "bg-gray-800 text-white ":"bg-white text-black "}`}>
      {showForm && (
        <Form
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          category={category}
          setCategory={setCategory}
          handleAddNote={handleAddNote}
          setShowForm={setShowForm}
        />
      )}
      <div className='grid grid-cols-4 p-4'>
        {filteredNotes.length === 0 ? (
          <div className="col-span-4 flex justify-center items-center h-40">
            <p className={`text-lg font-medium ${
              darkMode ? "text-white" : "text-gray-600"
            }`}>
              No results found
            </p>
          </div>
        ) : (
          filteredNotes.map((note, index) => (
            <NoteCard 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              key={index}
              title={note.title}
              content={note.content}
              category={note.category}
              date={note.date}
              pinned={note.pinned}
              onPin={()=>handlePinNote(index)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
