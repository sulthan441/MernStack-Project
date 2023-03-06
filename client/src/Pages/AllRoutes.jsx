import React from 'react'
import {Routes , Route} from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import Login from '../Components/Login-SignUp/Login'
import SignupForm from '../Components/Login-SignUp/SignUp'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
    </Routes>
  )
}

export default AllRoutes