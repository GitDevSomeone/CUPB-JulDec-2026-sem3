import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div style={{
      border: "1px solid black",
      padding: "3px"
    }}>
      <h1>this is Child Component</h1>
   
      <GrandChild />
    </div>
  )
}

export default Child
