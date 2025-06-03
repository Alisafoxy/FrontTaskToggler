import { TextField,Button } from "@mui/material"
import axios from "axios"
import { useRef } from "react"
const Add=({listId,refresh,setRefresh})=>{
  
    const Task=useRef('')
    return(
        <>
        <TextField placeholder="Task" onChange={(e)=>Task.current=e.target.value}/>
        <Button onClick={async()=>{
            const result= await axios.post('http://localhost:4000/addTask',{
                task:Task.current,
                done:false
            },{
                params:{
                    listId:listId
                }
            })
            if(result.status==200){
                alert('Task added')
                setRefresh(!refresh)
            }
        }}
        >Add</Button>
        </>
    )
}
export default Add