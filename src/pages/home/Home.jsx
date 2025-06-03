import { useContext, useEffect, useState } from "react"
import { globalProfile } from "../../App"
import axios from "axios"
import Add from "./Add"
import ListField from "./ListField"
const Home =()=>{
    const {profile}=useContext(globalProfile)
    const[list,setList]=useState([])
    const [refresh,setRefresh]=useState(false)
    // useEffect(()=>{
    //     axios.get('http://localhost:4000/lists',
    //         {
    //             params:{
    //                 userId:profile.id
    //             }
    //         }).then((result)=>{setList(result.data)})
    //     },[refresh])//when the refresh changes it will get all the lists again
    
    useEffect(() => {
        if (profile.id) {
          axios.get('http://localhost:4000/lists', {
            params: {
              userId: profile.id
            }
          }).then((result) => {
            setList(result.data);
            console.log("📥 רשימות נטענו:", result.data);
          });
        }
      }, [refresh, profile.id]);
        return(
        <div>
             <Add profileId={profile.id} refresh={refresh} setRefresh={setRefresh}/>
                <ul>{
                    list.map((l,i)=>{
                        return<ListField  refresh ={refresh} setRefresh={setRefresh} obj={l} />
                    })
                }
                </ul>

        </div>
    )
}
export default Home