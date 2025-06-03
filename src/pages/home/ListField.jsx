import { TextField,Button } from "@mui/material"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ListField =({obj,refresh,setRefresh})=>{
    const name =useRef('')
    const navigate=useNavigate()

    return(
        <div>
            <TextField defaultValue={obj.name} onChange ={(e)=>name.current=e.target.value}/>
            <Button onClick={async()=>{

                const result= await axios.delete('http://localhost:4000/list',
                    {
                        params:{
                            listId:obj._id
                        }
                    })
                    if(result.status==200)
                    { alert('record deleted')
                        setRefresh(prev => !prev)
                    }
            }}>X</Button>
            <Button onClick={async()=>{
                const result= await axios.put('http://localhost:4000/list',
                    {
                            name:name.current
                    },{
                        params:{
                            listId:obj._id
                        }
                    })
                    if(result.status==200)
                       { alert('record updated')
                        setRefresh(prev => !prev)
                       }
            }}>update</Button>
            <Button onClick={async()=>{
               navigate('/list/'+obj._id)
            }}>input</Button>
        </div>
    )
}
export default ListField