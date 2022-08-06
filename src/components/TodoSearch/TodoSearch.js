import React from 'react'
import "./TodoSearch.css"


const TodoSearch = ({searchValue, setSearchValue}) => {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  return (
    <div className='contenedorInput'>
        <input 
          className='search' 
          placeholder="Escribe una tarea a agregar"
          value={searchValue}
          onChange={onSearchValueChange}
        />
    </div>
    
  )
}

export default TodoSearch