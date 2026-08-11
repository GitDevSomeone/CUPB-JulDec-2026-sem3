// import React from 'react'

// let students = [{
//   name: "Himanshu",
//   group: "g13",
//   marks: 20
// },
// {
//   name: "Ritik",
//   group: "g13",
//   marks: 12
// },
// {
//   name: "Hemant",
//   group: "g13",
//   marks: 15
// }]

// function App(){
//   return(
//     <>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Group</th>
//             <th >Marks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* border: value.marks >= 15 ? "1px solid green" : "1px solid red", */}
//           {students.map(function(value, index){
//             return (
//               <tr style={{
//                backgroundColor: value.marks > 15 ?"green" : "red"
//               }}>
//                 <td>{value.name}</td>
//                 <td>{value.group}</td>
//                 <td>{value.marks}</td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default App



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



// import React from 'react'
// import Child from './components/Child'

// let name = "Himanshu"

// function App(){
//   return(
//     <>
//     <Child 
//     username={name} 
//     age={123} 
//     cl="red"
//     func={function(){return "Hello"}}
//     arr = {[1,2,3,4]}
//     obj={{
//       group: "g13"
//     }}
    
//     />
//     {/* <Child username="Krishan" age={156} cl="blue"/> */}
//     </>

//   )
// }

// export default App

// import React from 'react'
// // import Card from './components/Card'
// import Cards from './components/Cards'

// let students = [{
//   name: "Himanshu",
//   group: "g13",
//   marks: 20
// },
// {
//   name: "Ritik",
//   group: "g13",
//   marks: 12
// },
// {
//   name: "Hemant",
//   group: "g13",
//   marks: 15
// }]

// function App(){
//   return(
//     <>
//      <Cards students={students}/>
//     </>
//   )
// }

// export default App

// function App(){
//   return(
//     <>
//      {students.map(function(value, index){
//        return (
//        <Card student={value}/>
//       )
//      })}
//     </>
//   )
// }

// export default App


import React from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
