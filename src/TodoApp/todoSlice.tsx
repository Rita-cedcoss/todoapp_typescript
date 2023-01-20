import { createSlice } from '@reduxjs/toolkit'
import {todoprops} from './typeprops'
let initialState:todoprops={
    todoarr:[]
}
export const todoSlice=createSlice({
    name:"todoApp",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           state.todoarr.push(action.payload);
        },
        deleteTodo:(state,action)=>{
           state.todoarr.splice(action.payload,1);
        }
    }
})
export const {addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer