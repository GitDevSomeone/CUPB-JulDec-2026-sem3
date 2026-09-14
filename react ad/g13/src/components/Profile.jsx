import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Profile() {
  return (
    <div>
      <Outlet />
      <h1>Welcome to Profile Page</h1>
      <h1>Himanshu</h1>
      <h4>followers: and following: </h4>
      <nav style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/profile/posts">Posts</Link> 
        <Link to="/profile/reels">Reels</Link>
      </nav>



    </div>
  )
}

export default Profile
