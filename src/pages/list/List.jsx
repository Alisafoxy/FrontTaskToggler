import { useState } from "react" 
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import Add from "./Add"
import TaskField from "./TaskField"
const List=()=>{
    const[tasks,setTasks]=useState([])
    const{id}=useParams()
    const[refresh,setRefresh]=useState(false)
    useEffect(()=>{
        setRefresh(!refresh)
    },[])
    useEffect(()=>{
        axios.get('http://localhost:4000/tasks',{
            params:{
                listId:id
            }
        }).then(result=>setTasks(result.data))
    },[refresh])
    return(
        <>
        <div>List Page</div>
            <Add listId={id} refresh={refresh} setRefresh={setRefresh}/>
            <div>
                {
                    tasks.map((task) => (
                        <TaskField
                          key={task._id}  // ✅ פתרון לבעיה עם רינדור
                          obj={task}
                          refresh={refresh}
                          setRefresh={setRefresh}
                        />
                      ))
                }
            </div>
        </>
    )
}
export default List