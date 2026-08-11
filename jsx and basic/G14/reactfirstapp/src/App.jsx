// import React from "react";

// // let name = [<button>1</button>,<button>2</button>,<button>3</button>,<button>4</button>]

// let students = ["Himanshu", "Jesica", "Shivika"];

// let buttonStudents = students.map(function (value) {
//   return <button>{value}</button>;
// });

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <ul>
//         {students.map(function (value) {
//           return (
//             <li>
//               <button>{value}</button>
//             </li>
//           );
//         })}
//       </ul>
//       {buttonStudents}
//     </>
//   );
// }

// export default App;



// import React from 'react'

// function App(){
//   return(
//     <>
//       <h1 style={{
//         color: "red",
//         backgroundColor: "yellow",
//       }}>Hello world</h1>
//     </>
//   )
// }

// export default App


// import React from 'react'

// let visible = true

// function App(){
//   return(
//     <>
//       {visible == true? <h1>Hello world</h1> : <h1>Hello Chitkara</h1>}
//       <h1>Hello {visible == true ? "World" : "Chitkara"}</h1>

//     {visible == true ? <h1 style={{color: "red"}}>Hello G14</h1> : 
//           <h1 style={{color: "green"}}>Hello G14</h1>
//     }

//     <h1 style={{
//       color: visible == true ? "red" : "green"
//     }}>Hello G14</h1>

      
//     </>
//   )
// }

// export default App


// conditional rendering
// {visible == true? <h1>Hello world</h1> : <h1>Hello Chitkara</h1>}
// <h1>Hello {visible == true ? "World" : "Chitkara"}</h1>

// styling
{/* <h1 style={{
         color: "red",
         backgroundColor: "yellow",
     }}>Hello world</h1> */}

// rendering list
//       <ul>
//         {students.map(function (value) {
//           return (
//             <li>{value}</li>
//           );
//         })}
//       </ul>



import React from 'react'

let students = [{
  name: "Himanshu",
  group: "g13",
  marks: 20
},
{
  name: "Ritik",
  group: "g13",
  marks: 12
},
{
  name: "Hemant",
  group: "g13",
  marks: 15
}]

function App(){
  return(
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th >Marks</th>
          </tr>
        </thead>
        <tbody>
          {/* border: value.marks >= 15 ? "1px solid green" : "1px solid red", */}
          {students.map(function(value, index){
            return (
              <tr style={{
               backgroundColor: value.marks > 15 ?"green" : "red"
              }}>
                <td>{value.name}</td>
                <td>{value.group}</td>
                <td>{value.marks}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App



// function App(){
//   return(
    // <>
    //  {students.map(function(value, index, array){
    //    return (<div style={{
    //     height:"200px",
    //     width: "150px",
    //     border: value.marks >= 15 ? "1px solid green" : "1px solid red",
    //     textAlign: "center",
    //     display: value.marks >= 15 ? "block": "none"
    //   }}>
    //     <p>name: {students[index].name}</p>
    //     <p>group: {value.group}</p>
    //     <p>marks: {value.marks}</p>
    //   </div>)
    //  })}
    // </>
//   )
// }

// export default App