import React, { Children } from 'react'
import Login from './Login'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {

  let loginStatus = localStorage.getItem("isLoggedIn")
  if(loginStatus){
   return children
  }else{
    return <Navigate to="/" />
  }
}

export default ProtectedRoutes
