import React from 'react'
import { Link } from 'react-router-dom'

function ProtectedRoute({children}) {
    let loginStatus = localStorage.getItem("isLoggedIn")
    if(loginStatus == "true"){
        return children
    }else{
        return (
            <h3>please login first <Link to="/">login</Link></h3>
        )
    }
}

export default ProtectedRoute
