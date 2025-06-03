import { TextField,Button } from "@mui/material"
//import {DatePicker} from "@mui/x-date-pickers/DatePicker"
import { useNavigate } from "react-router-dom"
//import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import { useContext, useRef } from "react"
import { globalProfile } from "../../App"
import axios from "axios"
const Register=()=>{
    const{setProfile}=useContext(globalProfile)
    const navigate=useNavigate()
    const profile=useRef({
        "id":"",
        "name":"",
        "email":"",
        "phone":"",
        "password":""

    })
    return(
        <>
        <div style={{"display":"flex","flexDirection":"column"}}>
        <TextField placeholder="id" onChange={(e)=>{
            profile.current.id=e.target.value 
        }}/>
        <TextField placeholder="name" onChange={(e)=>{
            profile.current.name=e.target.value 
        }}/>
        <TextField placeholder="email" onChange={(e)=>{
            profile.current.email=e.target.value 
        }}/>
        <TextField placeholder="phone" onChange={(e)=>{
            profile.current.phone=e.target.value 
        }}/>
        <TextField placeholder="password" type="password" onChange={(e)=>{
            profile.current.password=e.target.value}} />
        <Button onClick={async()=>{
            // setProfile(profile.current)//update global profile
            const result=await axios.post('http://localhost:4000/register',{
                ...profile.current
            })
            console.log(result)
            navigate('/')//go to login page
            }}>Register</Button>
        </div>
        </>
    )
}
export default Register