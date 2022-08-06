import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  // const onComplete = () => {
  //   alert("Se completo el item " + props.text);
  // }

  // const onDelete = () => {
  //   alert("Se eliminó el item " + props.text);
  // }

  return (
    <>
      <li className='item'>
          <span 
            className={`completed ${props.completed && 'completed-item'}`} 
            
            onClick={props.onComplete}
          >
            C
          </span>
          <p className={`${props.completed && 'tachar'}`}>{props.text}</p>
          <span 
            className='delete'
            onClick={props.onDelete}
          >
            X
          </span>
      </li>
      <hr/>
    </>
    
  )
}

export default TodoItem