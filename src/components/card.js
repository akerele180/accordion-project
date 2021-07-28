import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import './card.css'

function Card({info, title}) {
  console.log(info)
  return (
    <div className="card">
      <div className="question">
        <h3>{ title }</h3>
        <AiFillPlusCircle />
      </div>
      <div className="answer">
        <p>{ info }</p>
      </div>
    </div>
  )
};
export default Card;