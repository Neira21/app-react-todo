import React from "react";
import './TodoCounter.css'; 



const TodoCounter = ({totalTodos, compledtedTodos}) => {

  return (
    <>
      <h1 className="tituloPrincipal">Lista de tareas - ToDoApp</h1>
      <h2 className="tituloCounterTodo" >Has completado {compledtedTodos} de {totalTodos} TODOs</h2>
    </>
    
  )
}

export default TodoCounter

