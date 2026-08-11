import React from 'react'

function Cards(props) {
  return (
    <div>
      {props.students.map(function(value, index){
       return (
         <div key={index} style={{
        height:"200px",
        width: "150px",
        border: value.marks >= 15 ? "1px solid green" : "1px solid red",
        textAlign: "center",
        // display: value.marks >= 15 ? "block": "none"
      }}>
        <p>name: {value.name}</p>
        <p>group: {value.group}</p>
        <p>marks: {value.marks}</p>
      </div>
      )
     })}
    </div>
  )
}

export default Cards
