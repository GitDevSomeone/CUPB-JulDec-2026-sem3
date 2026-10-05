import React from 'react'
import Login from './Login'
// import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
 let loginStatus = localStorage.getItem("loginStatus")
 if(loginStatus == "true"){
    return children
 }else{
    return <Login />
 }
}
