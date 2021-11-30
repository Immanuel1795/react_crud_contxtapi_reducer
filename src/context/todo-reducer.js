import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO} from './todo-actions'

const todoReducer = (state, action) =>{


    switch(action.type){
        case ADD_TODO:
           
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
            
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo)=>
                    todo.id === action.payload ? {...todo, complete: !todo.complete} : todo
                )
            };

            case DELETE_TODO:
               
                 return {
                     ...state,
                     todos: state.todos.filter(todo=>todo.id !== action.payload)
                 };

            case UPDATE_TODO:
           
            return {
              ...state,
              todos: state.todos.map((todo)=>
              todo.id === action.payload.id ? {...todo, ...action.payload} : todo
          )
                
            };  

       

        

        default:
            return state;
    }
}

export default todoReducer;