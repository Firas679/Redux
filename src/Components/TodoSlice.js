import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice ({
    name: 'todos',
    initialState : {
        todos:[{
            id:Math.random(),
            task:'Learn',
            isDone:false
        }]
    },
    reducers :{
        AddTodo : (state,action)=>{
            state.todos.push(action.payload)
        },
        Delete : (state,{type,payload}) =>{
            const deleted = state.todos.filter(el=>el.id !== payload)
            state.todos = deleted
        },
    }
})

export default TodoSlice.reducer
export const {AddTodo,Delete} = TodoSlice.actions