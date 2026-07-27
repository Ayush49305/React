import { useContext,createContext } from "react";

export const TodoContext=createContext({
    Todos:[
        {
            id:1,
            title:"Todo msg",
            completed:false,
        },
        {
            id:2,
            title:"Todo msg2",
            completed:false,
        }
    ]
})

export const useTodo=()=>{
    return useContext(useTodo)
}

export const TodoProvider=TodoContext.Provider