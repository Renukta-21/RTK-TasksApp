import { useDispatch, useSelector } from 'react-redux'
import { deleteTask} from './features/taskSlice'
import { Link } from 'react-router'

function TaskList() {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h2>{tasks.length} Tasks in list</h2>
        <Link to={'/create-task'}>Create new task</Link>
      </header>
      {tasks.length > 0 ? (
        tasks.map((t) => (
          <div key={t.id}>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
            <Link to={`/edit-task/${t.id}`}>Edit</Link>
          </div>
        ))
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  )
}

export default TaskList
