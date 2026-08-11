// import React from "react"
// function App(){
//   return React.createElement(
//     "h1", {id: "heading"}, "Hello world"
//   )
// }


// function App(){
//   return <h1 id="heading">Hello world</h1>
// }
// let name = function(){
//   return "Himanshu"
// }

// let arr = [<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>]
// function App(){
//   return (
//     <ul>
//       {arr}
//     </ul>
//   )
// }

// function App(){
//   return <>
//     <h1 id="heading">Hello {arr}</h1>
//     {/* <p>This is a pragraph tag {name()}</p>
//     <h3>{name()}</h3> */}
//   </>
// }

// let students = ["Himanshu", "utkarsh", "Saksham", "Aditya"]

// function App(){
//   return (
//     <>
//       <ul>
//       {students.map(function(value, index, array){
//           return <li>{value}</li>
//       })}
//       </ul>
//       <div>
//         {students.map(function(value, index, array){
//           return <button>{value}</button>
//       })}
//       </div>
//     </>
//   )
// }

// export default App


// import React from "react"

// function App(){
//   return (
//     <h1 style={{
//       color: "red",
//       backgroundColor: "yellow"
//     }} >Hello Chitkara</h1>
//   )
// }
// export default App


// import React from "react"
// let visible = true
// function App(){
//   return (
//     <>
//       {visible == true ? <h1>Hello Chitkara</h1> : 
//       <h1>Hello world</h1>}  

//       <h1>Hello {visible == true ? "Chitkara" : 
//       "world"}</h1>
//     </>
//   )
// }
// export default App


// import React from "react"
// let visible = ["Himanshu", "utkarsh", "Saksham", "Aditya"]
// function App(){
//   return (
//     <>
//      <ul>
//       {visible.map(function(value, index){
//         return <li>{value}-{index}</li>
//       })}
//      </ul>
//     </>
//   )
// }
// export default App


      // {visible == true ? <h1>Hello Chitkara</h1> : 
      // <h1>Hello world</h1>}  

      // <h1>Hello {visible == true ? "Chitkara" : 
      // "world"}</h1>

        // <h1 style={{
//       color: "red",
//       backgroundColor: "yellow"
//     }} >Hello Chitkara</h1>
// let visible = false
// function App(){
//   return (
//     <>
     
//       {visible == true ?  <h1 style={{color: "red"}}>Hello G16</h1> :
//         <h1 style={{color: "green"}}>Hello G16</h1> 
//       }

//       <h1 style={{
//         color: visible == true ? "red" : "green"
//       }}>Hello G16</h1>

//     </>
//   )
// }

// export default App


import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"


function App(){
  return (
    <>
      <Header />
      <Body />
    
    </>
  )
}

export default App
