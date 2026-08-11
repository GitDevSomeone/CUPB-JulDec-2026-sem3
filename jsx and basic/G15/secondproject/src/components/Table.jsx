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

let total = 0

function Table() {
  return (
    <>
     <table border="1">
        <thead>
           <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Marks</th>
            </tr> 
        </thead>

        <tbody>
            {students.map(function(value, index){
                total += value.marksobtained
               return (<tr style={{
                backgroundColor: value.marksobtained <= 15 ? "red" : ""
               }}>
                    <td>{value.name}</td>
                    <td>{value.group}</td>
                    <td>{value.marksobtained}</td>
                </tr>)
            })}
        </tbody>
     </table>
     <p>Average marks: {total/students.length} </p>
    </>
  );
}

export default Table;
