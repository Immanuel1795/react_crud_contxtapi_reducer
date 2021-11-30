import React, {useReducer, useState} from 'react'

import TodoContext from "./todo-context"
import todoReducer from './todo-reducer'
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO} from './todo-actions'

function TodoState(props) {

    const initialState = {
        todos: [],
    }

    const addTodo = (todo)=>{
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    const toggleTodo = (todoID)=>{
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID
        })
    }

    const deleteTodo = (todoID)=>{
        console.log(todoID)
        dispatch({
            type: DELETE_TODO,
            payload: todoID
        })
    }

    const updateTodo = (todo)=>{
        console.log(todo)
        dispatch({
            type: UPDATE_TODO,
            payload: todo
        })
    }

    const [screen, setScreen] = useState({
        mode: false,
        id: ""
    });

   




    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            toggleTodo,
            deleteTodo,
            updateTodo,
            screen,
            setScreen
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState
