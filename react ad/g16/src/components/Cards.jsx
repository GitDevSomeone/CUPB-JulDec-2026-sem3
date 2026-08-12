import React from 'react'

function Cards(props) {
  return (
    <div>
      {props.arr.map(function (value, index) {
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
            <p>name: {value.name}</p>
            <p>group: {value.group}</p>
            <p>marks: {value.marks}</p>
            <p>Status: {value.marks > 15 ? "Pass" : "Fail"}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Cards
