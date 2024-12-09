import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "./features/taskSlice"


function NewTaskForm() {
  const dispatch = useDispatch()

  const [task, setTask] = useState({
    title:'',
    description:''
  })

  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(addTask(task))
    setTask({
      title:'',
      description:''
    })
  }
  const handleChange=(e)=>{
    setTask({
      ...task,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" name="title" onChange={handleChange} value={task.title}/>
            <textarea name="description" id="" placeholder="description" onChange={handleChange} value={task.description}></textarea>
            <button>Add task</button>
        </form>
    </div>
  )
}

export default NewTaskForm