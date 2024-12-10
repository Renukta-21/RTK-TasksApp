import { BrowserRouter, Route, Routes } from 'react-router'
import NewTaskForm from './TaskForm'
import TaskList from './TaskList'
import { useEffect } from 'react'
import tasksServices from './services/tasksServices'
import { useDispatch } from 'react-redux'
import { initializeTasks } from './features/taskSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeTasks())
  }, [])
  return (
    <div>
      <h2>Tasks App</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<NewTaskForm />} />
          <Route path="/edit-task/:id" element={<NewTaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
