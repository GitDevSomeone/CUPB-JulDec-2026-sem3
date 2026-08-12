import React from 'react'

function Cards() {
  return (
    <div>
      {students.map(function (value, index) {
        return (
            <div
            style={{
              height: "200px",
              width: "150px",
              // border: value.marks > 15 ? "1px solid black" : "1px solid red",
            //   backgroundColor: value.marks > 15 ? "green" : "red",
              // display: value.marks > 15 ? "block" : "none"
            }}
          >
            <p>name: {props.student.name}</p>
            <p>group: {props.student.group}</p>
            <p>marks: {props.student.marks}</p>
            <p>Status: {props.student.marks > 15 ? "Pass" : "Fail"}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Cards
