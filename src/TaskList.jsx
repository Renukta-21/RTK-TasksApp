import { useDispatch, useSelector } from "react-redux"
import { deleteTask, editTask } from "./features/taskSlice"
import { useState } from "react"
import { Link } from "react-router"

function TaskList() {
    const [editionMode, setEditionMode] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }
    const handleEdit = (id)=>{
        setEditionMode(true)
        const editField = tasks.find(t=> t.id === id)
        setEditingTask(editField)
        console.log(editField)
        /* dispatch(editTask(id)) */
    }
    return (
    <div>
        <header>
            <h2>{tasks.length} Tasks in list</h2>
            <Link to={'/create-task'}>Create new task</Link>
        </header>
        {tasks.length>0 ? tasks.map(t=>(
            <div key={t.id}>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <button onClick={()=> handleDelete(t.id)}>Delete</button>
                <button onClick={()=> handleEdit(t.id)}>{editionMode && editingTask.id === t.id ? 'Save' : 'Edit'}</button>
            </div>
        )) : <p>No tasks yet</p> }
    </div>
  )
}

export default TaskList