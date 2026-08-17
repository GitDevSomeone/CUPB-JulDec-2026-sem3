import React from 'react'

function Cards(props) {
  return (
    <div>
      {props.studentArr.map(function(value, index){
        return(
          <div style={{
            border: "1px solid black",
            backgroundColor: value.marks >= 15 ? "green" : "red",
            height: "200px",
            width: "150px"
          }}>
            <p style={{
              color: value.marks <=10 ? "white" : "black"
            }}>name: {value.name}</p>
            <p>group: {value.group}</p>
            <p>marks: {value.marks}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
