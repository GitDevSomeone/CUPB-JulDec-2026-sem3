import React from 'react'

function Card(props) {
  return (
    <>
    <div style={{
            border: "1px solid black",
            backgroundColor: props.student.marks >= 15 ? "green" : "red",
            height: "200px",
            width: "150px"
          }}>
            <p style={{
              color: props.student.marks <=10 ? "white" : "black"
            }}>name: {props.student.name}</p>
            <p>group: {props.student.group}</p>
            <p>marks: {props.student.marks}</p>
          </div>
    </>
  )
}

export default Card
