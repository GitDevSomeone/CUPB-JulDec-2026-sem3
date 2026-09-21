import React from 'react'
import Login from './Login'

function ProtectedRoute({children}) {
  const loginStatus = localStorage.getItem("isLoggedIn")
  console.log(loginStatus)
  if(loginStatus == "true"){
    return children
  }else {
    return <Login />
  }
}

export default ProtectedRoute
