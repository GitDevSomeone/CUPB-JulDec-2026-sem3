import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div style={{
      border: "1px solid black",
      padding: "3px"
    }}>
      <p>This is Child component</p>
      <GrandChild />
    </div>
  )
}

export default Child
