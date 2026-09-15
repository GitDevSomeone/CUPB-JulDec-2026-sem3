import React from 'react'
import {Link, Outlet} from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function Profile() {
  // let urlUsername = useParams()
  // console.log(urlUsername.username)
  return (
    <div>
      <h1>Welcome to Profile Page</h1>
      {/* <h1>{urlUsername.username}</h1> */}
      <h4>followers: and following: </h4>
      <nav style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/profile/posts">Posts</Link> 
        <Link to="/profile/reels">Reels</Link>
      </nav>
        
        <Outlet />



    </div>
  )
}

export default Profile
