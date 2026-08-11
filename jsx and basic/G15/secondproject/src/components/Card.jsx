import React from "react";

let students = [
  {
    name: "Himanshu",
    group: "g14",
    marksobtained: 20,
  },
   {
    name: "Vidhi",
    group: "g14",
    marksobtained: 17,
  },
  {
    name: "Shivam",
    group: "g14",
    marksobtained: 10,
  },
  {
    name: "Manpreet",
    group: "g14",
    marksobtained: 12,
  },
];

function Card() {
  return (
    <>
      {students.map(function (value, index) {
        return (
            
          <div
            style={{
              height: "200px",
              width: "150px",

              border: value.marksobtained<=15?"1px solid red":"1px solid black",
              textAlign: "center",
            }}
          >
            <p>name: {value.name}</p>
            <p>group: {value.group}</p>
            <p>marks: {value.marksobtained}</p>
          </div>
        );
      })}
    </>
  );
}

export default Card;
