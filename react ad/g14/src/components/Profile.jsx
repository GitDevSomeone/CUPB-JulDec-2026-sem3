import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function Profile() {
  return (
    <div>
{/* <Outlet /> */}
      <h1>Profile component</h1>
      <p>name: Himanshu</p>
      <p>followers: following</p>
      <nav style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/profile/photos">Photos</Link>
        <Link to="/profile/reels">Reels</Link>
      </nav>

        <Outlet />
      
    </div>
  )
}

export default Profile
