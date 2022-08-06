import React from 'react'
import './CreateTodoButton.css'

const CreateTodoButton = (props) => {

  const onClickButton = () =>{
    props.setOpenModal(!props.openModal);
  }

  return (
      <button 
        className='button'
        onClick={onClickButton} 
      >
        +
      </button>
  )
}

export default CreateTodoButton