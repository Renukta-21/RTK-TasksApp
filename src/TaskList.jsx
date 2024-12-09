import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "./features/taskSlice"

function TaskList() {
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }
    return (
    <div>
        {tasks.length>0 ? tasks.map(t=>(
            <div key={t.id}>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <button onClick={()=> handleDelete(t.id)}>Delete</button>
            </div>
        )) : <p>No tasks yet</p> }
    </div>
  )
}

export default TaskList