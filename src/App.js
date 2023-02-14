/*import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";


function App() {
  const [todos, setTodos] = React.useState([{ text: "Watch The Last Of US" },{ text: "Have a coffee with the boys" },{ text: "Prepare for Hogwarts Legacy" }]);
  

  return (
    <div className="app">
      <div className="todo-list"> {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>))}
         <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
*/
import "./App.css";
import { useSelector } from 'react-redux';
import TodoList from './Components/TodoList';
import AddTodos from "./Components/Addtodo";


function App() {
  let todos = useSelector(state=>state.TodoReducer.todos)
  return (
    <div classname = "App">
      <h2> TodoList</h2>
      <hr/>
      <AddTodos/>
      <TodoList todos ={todos} />
    </div>
  );
}

export default App;