import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/taskSlice'
import notificationReducer from '../features/notificationSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notification: notificationReducer
  },
})

