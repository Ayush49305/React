import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    
  return (
    
        <div className="card">
        
        <div className="top">
          <img src={props.brandLogo}alt="" />
          <button>Save <Bookmark size={25}/> </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2> {props.post} </h2>
          <div className="tag">
            <h4>{props.dur}</h4>
            <h4>{props.level}</h4> 
          </div>          
        </div>
        
        <div className="bottom">
          <div>
            <h2>{props.salary}</h2>
            <p>{props.loc}</p>
          </div>   
          <button>Apply Now</button>       
        </div>
        
      </div>
      
    
  )
}

export default Card
