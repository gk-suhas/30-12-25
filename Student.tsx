import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateTaskStatus } from './redux/TaskSlice'
function Student() {
    const dispatch=useDispatch()
    const tasks=useSelector((state)=>state.tasks.tasks)

    const studentTasks=tasks

    if(studentTasks.length===0){
        return <h2>no tasks assigned</h2>
    }
    return(
        <>
        <h2>student dashboard</h2>
        <div>
            {studentTasks.map(task=>(
                <div key={task.id}>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <p>status {task.status}</p>
                     {task.status==="pending"&&(
                    <>
                    <button
                    onClick={()=>{
                        dispatch(
                            updateTaskStatus({
                                id:task.id,
                                status:"fulfilled"
                            })
                        )
                    }}
                    >mark fulfilled</button>
                    <button
                     onClick={()=>{
                        dispatch(
                            updateTaskStatus({
                                id:task.id,
                                status:"rejected"
                            })
                        )
                     }}
                     >mark reject</button>
                    </>
                )}
                </div>
               
            ))}
        </div>
       
        </>
    )
}

export default Student