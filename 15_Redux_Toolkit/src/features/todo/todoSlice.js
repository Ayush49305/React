import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todo.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todo.filter((todo)=>todos.id!==action.payload)
        },
    }
})