import React, { useContext } from "react";
import  "./TodoList.css";
import TodoContext from "../../context/todo-context";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {

  function update(id){
   
    setScreen({
      mode: true,
      id: id
    })
  }
 
  const {todos, toggleTodo, deleteTodo,setScreen} = useContext(TodoContext)
  return (
    <div className="todo-list">
      <h3 className="todo-list-title">TO-DOS</h3>
      <div className="todo-list-todos">
        {
          todos.map(todo=>{
            return <TodoItem key={todo.id} text={todo.text} handleToggle={()=>toggleTodo(todo.id)} handleDelete={()=>deleteTodo(todo.id)} complete ={todo.complete} handleUpdate={()=>update(todo.id)}/>
          })
        }
       
         
     
      </div>
    </div>
  );
};

export default TodoList;
