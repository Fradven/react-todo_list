import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = "todoApp.todo"

function App() {
  //object destructuring
  const [todo, setTodo] = useState([]) //[element, overwrite the element]
  const addRef = useRef()
  
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodo(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  },[todo])

  /**
   * toggle the checkbox on click
   * @param {id} idElem 
   */
  function toggleCheckbox(idElem) {
    const newTodo = [...todo]
    const todoStatus = newTodo.find(todo => todo.id === idElem)
    todoStatus.complete = !todoStatus.complete
    setTodo(newTodo)
  }

  //add & give an id, name and a complete status to elements to "todo"
  function addTodo (e) {
    const addElementTodo = addRef.current.value;
    if (addElementTodo === '') return
    setTodo (listTodo => [...listTodo, { id: uuidv4(), name: addElementTodo, complete: false}])
    addRef.current.value = null
  }
  
  /**
   * allow for checked element to be cleared
   */
  function clearTodo() {
    const newTodo = todo.filter(todoStatus => !todoStatus.complete)
    setTodo(newTodo)
  }

  //the inject component to the index
  return (
    <>
    <div className="todo">
    <h1 className="todo__title">Your Todo List</h1>
    <form className="todo__form"onSubmit={addTodo}>
      <label className="todo__label">Add to the List: </label>
        <input ref={addRef} type="text"/>      
    </form>
    <div className="todo__ctn">
      <button className="todo__btn todo__btn--add" onClick={addTodo}>
        <span className="text">Add</span>
        
        </button>
      <button className="todo__btn todo__btn--rmv" onClick={clearTodo}>
        <span className="text">Remove</span></button>
    </div>
    <TodoList todoList={todo} toggleCheckbox={toggleCheckbox}/>
    </div>
    </>
  )
}

export default App;