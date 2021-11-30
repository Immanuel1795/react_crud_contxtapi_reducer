import React from "react";
import './TodoItem.css'

const TodoItem = ({text, handleToggle, handleDelete, complete, handleUpdate}) => {
  return (
    <div className="todo-item">
      <span
        className="todo-item-text"
        style={{color: complete ? "green": "red", textDecoration: complete ? "line-through": "none"}}
      >
       {text}
      </span>
      <div>
        <button className="todo-item-toggle" onClick={handleToggle}>
          Done
        </button>
        <button className="todo-item-delete " onClick={handleUpdate}>
          Update
        </button>
        <button className="todo-item-delete " onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
