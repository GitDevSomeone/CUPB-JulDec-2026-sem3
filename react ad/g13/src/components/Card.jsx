import React from 'react'

function Card(props) {
  return (
    <div style={{
        height:"200px",
        width: "150px",
        // border: value.marks >= 15 ? "1px solid green" : "1px solid red",
        textAlign: "center",
        // display: value.marks >= 15 ? "block": "none"
      }}>
        <p>name: {props.student.name}</p>
        <p>group: {props.student.group}</p>
        <p>marks: {props.student.marks}</p>
      </div>
  )
}

export default Card
