
import { TextField,Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useContext, useRef } from "react"
import { globalProfile } from "../../App"
import axios from "axios"

const Login=()=>{
    const navigate=useNavigate()
    const {profile,setProfile}=useContext(globalProfile)
    const loginParams =useRef({
        "id":"",
        "password":""
    })
    return(
        <>
        <div style={{"display":"flex","flexDirection":"column"}}>
            <TextField placeholder="id" onChange={(e)=>{
            loginParams.current.id=e.target.value}}/>
            <TextField placeholder="password" type="password" onChange={(e)=>{
            loginParams.current.password=e.target.value}}/>
            <Button onClick={async()=>{
                try {
                    const result = await axios.get('http://localhost:4000/login', {
                      params: {
                        ...loginParams.current
                      }
                    });
                
                    if (result.status === 200) {
                      setProfile(result.data)
                      alert('ברוך הבא!');
                      navigate('/home');
                    }
                  }
                  catch (error) {
                    if (error.response) {
                      if (error.response.status === 404) {
                        alert('משתמש לא קיים. אנא הירשם למערכת');
                        navigate('/register');
                      } else if (error.response.status === 401) {
                        alert('סיסמה שגויה!');
                      } else {
                        alert('שגיאה לא צפויה בשרת');
                      }
                    } else {
                      alert('אין תקשורת עם השרת');
                    }
                  }
            //     //if the id and password correct , the next page will be the home page
            //    if(profile.id===""&&profile.password===""){
            //     alert("the user is not registered yet")
            //    }
            //    else if(profile.id!=loginParams.current.id || profile.password!=loginParams.current.password)
            //    {
            //     alert("the password or the username is not correct")
            //    }
            //    else{
            //     alert(`walcome ${profile.name}`)
            //     navigate('/home')
            //    }
               
               }}>Sign in</Button>
            <Button onClick={()=>{navigate('/register')}}>Register</Button>
        </div>
        </>
    )
}
export default Login