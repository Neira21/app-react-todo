import React from 'react'
import "./TodoList.css"

const TodoList = (props) => {
  return (
    <section className='lista'>
        {props.children}
    </section>
  )
}

export default TodoList