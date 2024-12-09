import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [{
    id:"1",
    title:'First task',
    description:'First task description'
},{
    id:"2",
    title:'Second task',
    description:'Second task description'
}]

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.push({
                ...action.payload,
                id: uuid()
            })
        },
        deleteTask:(state, action)=>{
            const deleteItem = state.find(e=> e.id=== action.payload)
            if(deleteItem){
                state.splice(state.indexOf(deleteItem), 1)
            }
        }
    }
})

export const {addTask, deleteTask} = tasksSlice.actions

export default tasksSlice.reducer