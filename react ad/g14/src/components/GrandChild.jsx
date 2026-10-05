import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'


function GrandChild() {
    const username = useContext(UserContext)
  return (
    <div style={{
      border: "1px solid black",
      padding: "3px"
    }}>
      <p>This is GrandChild component</p>
      {username}
    </div>
  )
}

export default GrandChild
