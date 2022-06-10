import React from 'react'
import NavBar from './Components/NavBar'
import {Route, Routes, Link} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registration'
 
const App = () => {
  return (
   <> 
    <NavBar />
    <Routes>
        <Route path="/app" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
    </Routes>
    </>  
  )
}

export default App