import React from "react";
//import './App.css';
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";

import Modal from "./Modal/Modal";
import TodoForm from "./Modal/TodoForm";

// const defaultTodos = [
//   {
//     id:1, text: 'Hacer la compra', completed: true,
//   },
//   {
//     id:2, text: 'Completar curso de PLatzi', completed: false,
//   },
//   {
//     id:3, text: 'Preparar la cena', completed: false,
//   }
// ]


console.log(Date.now());

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(()=>{
      const localStorageItem = localStorage.getItem(itemName);
      let parseItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = initialValue;
      }else{
        parseItem = JSON.parse(localStorageItem);
      }

      setItem(parseItem);
      setLoading(false);
    }, 1000);
  })


  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return {
    item, 
    saveItem, 
    loading
  };
}

function App() {
  const {
    item:todos, 
    saveItem: saveTodos,
    loading
  } = useLocalStorage("TODOS_V1", []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const compledtedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  let error;
  
  if(!searchValue.length>=1){
    searchTodos = todos;
  }else{
    searchTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      id: Date.now(),
      completed: false,
      text,
    })
    saveTodos(newTodos);
  }

  const completeTodo = (id) =>{
    const todoIndex = todos.findIndex(todo=>todo.id===id);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = !todos[todoIndex].completed;

    saveTodos(newTodos);
  }

  const deleteTodo = (id) =>{
    const todoIndex = todos.findIndex(todo=>todo.id===id);

    const newTodos = [...todos];

    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
    alert("Se eliminó el item");
  }

  // console.log("Render (antes del use Effect)");
  // React.useEffect(()=>{
  //   console.log("Render (use Effect)");
  // },[] )

  // console.log("Render (despues del use Effect)");

  return (
    <>
      <TodoCounter compledtedTodos={compledtedTodos} totalTodos ={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>

        {error && <p>Desespérate, hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchTodos.length) && <p>Crea tu primer TODO</p> }

        {searchTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed ={todo.completed}
            onComplete = {()=>completeTodo(todo.id)}
            onDelete = {()=>deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal> 
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      
    </>
  )
}

export default App;
