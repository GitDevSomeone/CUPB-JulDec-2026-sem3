// import React from "react";

// let student = [
//   {
//     name: "Himanshu",
//     group: "g15",
//     marks: 20,
//   },
//   {
//     name: "Saksham",
//     group: "g15",
//     marks: 13,
//   },
//   {
//     name: "Pratham",
//     group: "g15",
//     marks: 15,
//   },
//   {
//     name: "Siya",
//     group: "g15",
//     marks: 10,
//   },
// ];


// function App() {
//   return (
//     <>
//       {student.map(function (value, index) {
//         return (
//           <div
//             style={{
//               height: "200px",
//               width: "150px",
//               border: value.marks>=15? "1px solid red": "1px solid green",
//               // backgroundColor: value.marks < 15 ? "red" : "green",
//               // color: "white",
//               // display: value.marks>=15 ? "block" : "none",
              
//             }}
//           >
//             <p>name: {student[index].name}</p>
//             <p>group: {value.group}</p>
//             <p>marks: {value.marks}</p>
//             <p>status: {value.marks < 15 ? "Fail": "Pass"}</p>
//           </div>
//         );
//       })}

      
//     </>
//   );
// }

// export default App;


// import React from 'react'
// import G15 from './components/G15'

// let loggedInUser = "Himanshu"

// function App() {
//   return (
//     <div>
//       <G15 
//       uname={loggedInUser}
//       age={1234}
//       str="hello world"
//       bool={true}
//       func={
//         function(){
//           return "Hello Himanshu"
//         }
//       }
//       arr={[1,2,3,4]}
//       obj={{
//         course: "Bee"
//       }}
//       />
//     </div>
//   )
// }

// export default App

import React from "react";
import Cards from "./components/Cards";

let student = [
  {
    name: "Himanshu",
    group: "g15",
    marks: 20,
  },
  {
    name: "Saksham",
    group: "g15",
    marks: 13,
  },
  {
    name: "Pratham",
    group: "g15",
    marks: 15,
  },
  {
    name: "Siya",
    group: "g15",
    marks: 10,
  },
];


function App() {
  return (
    <>
     <Cards stud={student}/>
    </>
  );
}

export default App;