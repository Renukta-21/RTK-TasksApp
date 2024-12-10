import { BrowserRouter, Route, Routes } from "react-router"
import NewTaskForm from "./TaskForm"
import TaskList from "./TaskList"

function App() {
  return (
    <div>
      <h2>Tasks App</h2>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<TaskList/>} />
      <Route path="/create-task" element={<NewTaskForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App