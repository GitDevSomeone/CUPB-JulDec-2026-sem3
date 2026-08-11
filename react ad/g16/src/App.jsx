import React from "react";

let student = [
  {
    name: "Himanshu",
    group: "g16",
    marks: 20,
  },
  {
    name: "Gautam",
    group: "g16",
    marks: 18,
  },
  {
    name: "Suryansh",
    group: "g16",
    marks: 12,
  },
   
];

// function App() {
//   return (
//     <>
//       {student.map(function (value, index) {
//         return (
//            <div
//             style={{
//               height: "200px",
//               width: "150px",
//               border: value.marks > 15 ? "1px solid black" : "1px solid red",
//               backgroundColor: value.marks > 15 ? "green" : "red",
//               display: value.marks > 15 ? "block" : "none"
//             }}
//           >
//             <p>name: {value.name}</p>
//             <p>group: {value.group}</p>
//             <p>marks: {value.marks  }</p>
//             <p>Status: {value.marks > 15 ? "Pass" : "Fail"}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }


// function App() {
//   let sum = 0;
//   return (
//     <>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Group</th>
//             <th>Marks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {student.map((value, index)=>{
//             sum += value.marks
//             return (
//               <tr>
//                 <td>{value.name}</td>
//                 <td>{value.group}</td>
//                 <td>{value.marks}</td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>

//       <h3>Average marks: {sum/student.length}</h3>
//       {sum/student.length <= 15 ? <h3>marks dropping below limit</h3> : <></>}
//     </>
//   );
// }

import Child from "./components/Child";

let username = "chitkara"

function App(){
  return <>
    <Child un={username} cl="red"/>
    <Child un="Pranay" cl="blue"/>
  </>
}

export default App;
