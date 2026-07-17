import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0  rounded-3xl overflow-hidden relative '>
      <img className='h-full w-full object-cover'src={props.img} alt="" />  

      <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>      
         
    </div>
  )
}

export default RightCard

{/* <img className='h-full w-full object-cover 'src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />  */}
