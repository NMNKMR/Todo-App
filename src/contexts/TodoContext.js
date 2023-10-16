import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "",
            completed: false
        }
    ],
    addTodo: (todo)=> {},
    updateTodo: (id, todo)=> {},
    deleteTodo: (id)=> {},
    todoComplete: (id)=> {}
})

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}