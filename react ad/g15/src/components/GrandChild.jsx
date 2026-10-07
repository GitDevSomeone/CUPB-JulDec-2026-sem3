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
      <h1>this is GrandChild component</h1>
      {username}
    </div>
  )
}

export default GrandChild
