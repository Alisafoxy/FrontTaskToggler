import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useRef } from "react"


const Add=({profileId,setRefresh,refresh})=>{
    const name =useRef('')
    return(
        <div>
            <TextField placeholder="List name"
            onChange={(e)=>name.current=e.target.value}/>
            <Button onClick={async()=>{
                try{const result = await axios.post('http://localhost:4000/addList',
                    {
                        name: name.current   
                    },{
                    params:{
                        userId:profileId
                    }
                })
                console.log("📦 profileId שנשלח:", profileId);
                
                if(result.status==200)
                {
                    alert('list name add')
                    setRefresh(prev => !prev)//when i add a new list i want the page to refresh to get all the lists again
                }}
                catch(err){
                    console.error("שגיאה בעת יצירת רשימה חדשה:", err);
                    alert("שגיאה ביצירת רשימה");
                    
                }

            }}>
                Add
            </Button>
        </div>
    )
}
export default Add