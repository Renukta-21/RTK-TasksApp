import { createSlice } from '@reduxjs/toolkit'
import tasksServices from '../services/tasksServices'
/* import { v4 as uuid } from 'uuid' */


const tasksSlice = createSlice({
  name: 'tasks',
  initialState:[],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const deleteItem = state.find((e) => e.id === action.payload)
      if (deleteItem) {
        state.splice(state.indexOf(deleteItem), 1)
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const foundTask = state.find((s) => s.id === id)
      if (foundTask) {
        foundTask.title = title
        foundTask.description = description
      }
    },
    setTasks:(state, action)=>{
        return action.payload
    },
  },

})

export const { addTask, deleteTask, editTask, setTasks, createTask } = tasksSlice.actions

export const initializeTasks = ()=>{
    return async dispatch=>{
        const tasks = await tasksServices.getAll()
        dispatch(setTasks(tasks))
    }
}
export default tasksSlice.reducer
