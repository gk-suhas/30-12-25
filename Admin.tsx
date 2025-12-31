import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './redux/TaskSlice'
import { v4 as uuid } from 'uuid'
function Admin() {
    const dispatch=useDispatch()
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[assignedTo,setAsignedTo]=useState("")

    const handleAssignTask=()=>{
        if(!title || !assignedTo)return
        dispatch(
            addTask({
                id:uuid(),
                title,
                description,
                assignedTo,
                status:"pending"
            })
        )
        setTitle("")
        setDescription("")
        setAsignedTo("")
    }
  return (
    <>
    <div>admin assign task</div>
    <input type="text"
           placeholder='task title'
           value={title}
           onChange={(e)=>setTitle(e.target.value)}
    />
    <br />

    <input type="text" 
           placeholder='description'
           value={description}
           onChange={(e)=>setDescription(e.target.value)}
    />
    <br />

    <input type="text" 
           placeholder='assign to'
           value={assignedTo}
           onChange={(e)=>setAsignedTo(e.target.value)}
    />
    <br />

    <button onClick={handleAssignTask}>assign task</button>
    </>
  )
}

export default Admin