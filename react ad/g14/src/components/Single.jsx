import React from 'react'
import { useParams } from 'react-router-dom'

function Single() {
    const urlData = useParams()
    // console.log(urlData.username)
  return (
    <div>
      <h1>displaying user profile for {urlData.username}</h1>
    </div>
  )
}

export default Single
