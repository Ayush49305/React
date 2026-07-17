import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const users=[
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'royalblue',
    intro:'prime customers, that have access to the bank credit and are satisfied with the current product',
    tag:'satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    color:'lightseagreen',
    intro:'prime customers, that have access to the bank credit and are not satisfied with the current service',
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    color:'orange',
    intro:'Customers from near prime and sub-prime segments with no accsess to the bank credit',
    tag:'underbanked'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    color:'pink',
    intro:'Customers from near prime and sub-prime segments with no accsess to the bank credit',
    tag:'Average' 
  }

]

const App = () => {
  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App
