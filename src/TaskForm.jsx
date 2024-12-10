import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  editTask, createNewTask } from './features/taskSlice'
import { useNavigate, useParams } from 'react-router'

function NewTaskForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const tasks = useSelector((state) => state.tasks)
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((t) => t.id === params.id))
    }
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(createNewTask(task))
      setTask({
        title: '',
        description: '',
      })
    }
    navigate('/')
  }
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          id=""
          placeholder="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default NewTaskForm
