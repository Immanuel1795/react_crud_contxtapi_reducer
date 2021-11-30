import React, {useState, useContext,  useEffect} from "react";
import "./TodoInput.css"

import TodoContext from "../../context/todo-context";



const TodoInput = () => {

  const [todo, setTodo] = useState("");
  const { addTodo, screen, setScreen, todos, updateTodo } = useContext(TodoContext);

  console.log(todos)

  const [updatetodos, setUpdateTodos] = useState("")

  function gettodos(){

    const editTodo = todos.find(todo=>{
      return todo.id === screen.id
    })

    setUpdateTodos(editTodo)

  }

  useEffect(gettodos, [screen.id])



 






 

 

  const onChangeHandler = (e) => {
    !screen.mode ? setTodo(e.target.value) : setUpdateTodos(preValue=>{
      return {
        ...preValue,
        text: e.target.value
      }
    })
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(!screen.mode){
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: todo,
        complete: false,
        update: false,
      };
  
    
      addTodo(newTodo);
  
      setTodo("");
    } else {

    //   const editedData = todos.map(x => {

    //     if (x.id === screen.id) {
    //       return( {
    //             ...x,
    //             ...updatetodos
    //         })
    //     }
    //     return x;
    // })
      
      
 
      updateTodo(updatetodos)

      setScreen({
        mode: false,
        id: ""
      });
    }
    
   
   
  };
  

  return (
    <div className="todo-input">
      <h3 className="todo-input-title">
        TODO APP
      </h3>
      <form onSubmit={onSubmitHandler} className="todo-input-form">
        <input
          className="todoinput-input"
          type="text"
          value={!screen.mode ? todo : updatetodos?.text}
          placeholder="Enter a Todo..."
          onChange={onChangeHandler}
        />
        {
          !screen.mode ? <button className="todo-input-submit">ADD</button> : <button className="todo-input-submit">Update</button>
        }
        
      </form>
    </div>
  );
};

export default TodoInput;
