// import React from "react"

// // function App(){
// //   return React.createElement("h1", null, "Hello world")
// // }

// // let name = function(){
// //   return "Himanshu"
// // }

// let arr = [<button>1</button>,<button>2</button>,<button>3</button>,<button>4</button>]
// let name1 = "himanshu"
// let name2 = "chitkara"
// function App(){
//   return <>
//     {arr}
//       {/* <h1>Hello {arr}</h1> */}
//       {/* <p>Hello from paragraph {name}</p>
//       <h3>{name}</h3> */}
//   </>
// }

// export default App



import React from 'react'
import Header from "./components/Header"
import Body from './components/Body'
import Card from "./components/Card"
import Table from "./components/Table"


function App(){
  return (
    <>
      {/* <Header />
      <Body /> */}
      {/* <Card /> */}
        <Table />
    </>
  )
}

export default App