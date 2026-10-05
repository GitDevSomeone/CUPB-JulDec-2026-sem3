import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet, useParams } from 'react-router-dom'

function Profile() {
  const urldata = useParams()
  console.log(urldata.username)
  return (
    <div>
          <Outlet/>
      <h1>this is profile component for {urldata.profile}</h1>
      <p>{urldata.username}</p>
      <p>followers: following</p>
      <nav style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/profile/photos">Photos </Link>
        <Link to="/profile/reels">Reels</Link>
         
      </nav>
        <Outlet/>

    

    </div>
  )
}

export default Profile
