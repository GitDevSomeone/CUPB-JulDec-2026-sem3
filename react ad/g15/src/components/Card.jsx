import React from 'react'

function Card(props) {
  return (
    <div>
       <div
            style={{
              height: "200px",
              width: "150px",
              border: props.stud.marks>=15? "1px solid red": "1px solid green",
              backgroundColor: props.stud.marks < 15 ? "red" : "green",
              color: "white",
              
            }}
          >
            <p>name: {props.stud.name}</p>
            <p>group: {props.stud.group}</p>
            <p>marks: {props.stud.marks}</p>
            <p>status: {props.stud.marks < 15 ? "Fail": "Pass"}</p>
          </div>
    </div>
  )
}

export default Card
