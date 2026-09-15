import React from 'react'

function ProtectedRoute({children}) {
    let isLoggedIn = localStorage.getItem("isLoggedIn")

    if(isLoggedIn == "true"){
        return children
    }

}

export default ProtectedRoute
