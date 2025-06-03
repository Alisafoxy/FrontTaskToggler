
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { createContext, useState } from 'react'
export const globalProfile=createContext({})
export const globalList=createContext({})
import Login from './pages/login/index'
import Register from './pages/register/index'
import Home from './pages/home/Home'
import List from './pages/list/List'

function App() {
  const [profile,setProfile]=useState({
    "name":"",
    "email":"",
    "phone":"",
    "id":"",
    "birthday":""
  })
  const [list,setList]=useState([])


  return (
    <>
    <globalProfile.Provider value={{profile,setProfile}}>
      <globalList.Provider value={{list,setList}}>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/register'Component={Register}/>
        <Route path='/home' Component={Home}/>
        <Route path='/list/:id' Component={List}/>
      </Routes>
      </globalList.Provider>
      </globalProfile.Provider>
    </>
  )
}

export default App
