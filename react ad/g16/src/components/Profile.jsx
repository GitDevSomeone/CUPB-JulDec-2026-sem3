import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Profile() {
  return (
    <div>
      <Outlet />
      <h1>profile component</h1>
      <h2>name: himanshu</h2>
      <h3>followers; 12, following: 123</h3>

      <nav  style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/profile/photos">photos</Link>
        <Link to="/profile/reels">reels</Link>
      </nav>

      <Outlet />

    </div>
  )
}

export default Profile
