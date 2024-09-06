import React from 'react'
import { Link } from "react-router-dom";
import "./Comments.css"
const Comments = ({cmt,temp}) => {
  return (
    <div className={`ct ${temp ? '' : 'hidden'}`}>
      {cmt?.comment.map((hehe,id)=>{
        return (
          <div className='ot' key={id}>
            <Link className='fst' to={`/person/${hehe.userid}`} >
              @{hehe.username} :
            </Link>
            <div className='snd'>
              {hehe.text}
            </div>   
          </div>
        )
      })}
    </div>
  )
}

export default Comments
