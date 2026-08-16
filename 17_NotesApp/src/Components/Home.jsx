import React, { useState } from 'react'
import NoteCard from './NoteCard'
import Form from './Form'

const Home = ({showForm,setShowForm}) => {

  
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
  },

  ])
  return (
    <div className='flex-1 grid bg-white p-5'>
      {showForm && <Form />}
      <div className='grid grid-cols-4 p-4'>
        {notes.map((note,index)=>(
          <NoteCard
          key={index}
          title={note.title}
          content={note.content}
          category={note.category}
          date={note.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
