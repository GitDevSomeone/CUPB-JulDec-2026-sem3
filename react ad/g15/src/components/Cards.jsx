import React from 'react'

function Cards(props) {
  return (
    <div>
       {props.stud.map(function (value, index) {
        return (
         <div
            style={{
              height: "200px",
              width: "150px",
            //   border: props.stud.marks>=15? "1px solid red": "1px solid green",
            //   backgroundColor: props.stud.marks < 15 ? "red" : "green",
            //   color: "white",
              
            }}
          >
            <p>name: {value.name}</p>
            {/* <p>group: {props.stud.group}</p>
            <p>marks: {props.stud.marks}</p>
            <p>status: {props.stud.marks < 15 ? "Fail": "Pass"}</p> */}
          </div>
        );
      })}
    </div>
  )
}

export default Cards
