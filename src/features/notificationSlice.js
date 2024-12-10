import { createSlice } from "@reduxjs/toolkit";

const notificationSlice =  createSlice({
    name:"notification",
    initialState:'',
    reducers:{
        setNotification:(state, action)=> action.payload,
        clearNotification:()=> ''
    }
})
export const {setNotification, clearNotification} = notificationSlice.actions

export const showNotification = (message, timeOut=5000)=>{
    return async dispatch=>{
        dispatch(setNotification(message))
        
        setTimeout(()=>{
            dispatch(clearNotification())
          }, timeOut)

    }
}
export default notificationSlice.reducer