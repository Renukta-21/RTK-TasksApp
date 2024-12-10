import { useSelector } from "react-redux"

function Notification() {
  const notification = useSelector(state=> state.notification)
  console.log(notification)
  
  if(!notification) return null
  
  return (
    <div style={{backgroundColor:'red'}}>ERRORES O QUE</div>
  )
}

export default Notification