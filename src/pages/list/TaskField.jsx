import { TextField,Button, Checkbox } from "@mui/material"
import axios from "axios"
import { useEffect, useRef } from "react"
const TaskField=({obj,refresh,setRefresh})=>{

    const Task=useRef({
        "task":obj.task,
        "done":obj.done
    })
    return(
        <>
        <TextField placeholder="Task" defaultValue={obj.task} onChange={(e)=>{
            Task.current.task=e.target.value
        }}/>
        {/* <Checkbox defaultValue={obj.done} onChange={(e)=>{
            Task.current.done=e.target.value=='on'?true:false
        }}> */}
        <Checkbox checked={Task.current.done} onChange={(e) => {Task.current.done = e.target.checked;}}></Checkbox>
        <Button onClick={async()=>{
            const result =await axios.put('http://localhost:4000/updateTasks',{
                ...Task.current
            },{
                params:{taskId:obj._id}
            })
            if(result.status==200){
                alert('Updated')
                setRefresh(!refresh)
            }
        }}>Update</Button>
        <Button onClick={async()=>{
            const result =await axios.delete('http://localhost:4000/task',{
                params:{taskId:obj._id}
            })
            if(result.status==200){
                alert('Deleted')
                setRefresh(!refresh)
            }
        }}>X</Button>
        
        </>
    )
}
export default TaskField