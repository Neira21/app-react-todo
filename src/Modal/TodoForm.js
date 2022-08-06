import React from 'react'
import "./TodoForm.css"

const TodoForm = (props) => {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onChangeInput = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        props.setOpenModal(false);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(newTodoValue)
        props.setOpenModal(false);
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Ingrese su nueva tarea</label>
        <textarea value={newTodoValue} onChange={onChangeInput}  placeholder='Cortar la cebolla para el almuerzo'></textarea>
        <div className='TodoForm-buttonContainer'>
            <button 
                type='submit'
                className='TodoForm-button TodoForm-button--add'
            >
                Agregar
            </button>
            <button 
                onClick={onCancel} 
                type="button"
                className='TodoForm-button TodoForm-button--cancel'
            >
                Cancelar
            </button>
        </div>
    </form>
  )
}

export default TodoForm