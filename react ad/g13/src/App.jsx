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

// for state variable
// import React from 'react'
// import Counter from './components/Counter'

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   )
// }

// for routing
// create required components
// install a new package called react-router-dom
      // terminal - npm install react-router-dom
// main.jsx -> import a function(component) named BrowserRouter
// use this component BrowserRouter by wrapping my app inside it


// create a nvigation bar and nav links
// import Link Component

// import React from 'react'
// import {Link, Routes, Route} from 'react-router-dom'
// import Home from "./components/Home"
// import Profile from "./components/Profile"
// import Explore from "./components/Explore"

// function App() {
//   return (
//     <div>
//       <nav style={{
//         display: "flex",
//         gap: "20px",
//         border: "1px solid black"
//       }}>
//         <Link to="/home">Home</Link>
//         <Link to="/explore">Explore</Link>
//         <Link to="/profile">Profile</Link>
//       </nav>

//       <Routes>
//         <Route path='/home' element={<Home />} />
//         <Route path='/profile' element={<Profile />}/>
//         <Route path='/explore' element={<Explore />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React, {useState, useEffect, useRef} from 'react'

// function App() {
//   // let count2 = 0
//   const count2 = useRef(0)
//   const [count, setCount] = useState(0)
//   const [count1, setCount1] = useState(10)
  // function increaseHandler(){
  //   count2.current ++ 
  //   console.log(count2.current)
  // }
//   console.log("count----",count)
//   console.log("count2----",count2)

//   function decreaseHandler(){
//     setCount(()=>{
//       return count - 1
//     })

//   }

//   function increase(){
//     setCount1(()=>{
//       return count1 + 10
//     })
//   }


//   return (
//     <div>
//       <button onClick={decreaseHandler}>-</button>
//       <h1>{count}</h1>
//       <h1>{count1}</h1>
//       <button onClick={increaseHandler}>+</button>
//       <button onClick={increase}>increase count1 by 10</button>
      
//     </div>
//   )
// }

// export default App



// import React,{useState, useEffect, useCallback} from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [input, setInput] = useState("")
//   // let count2 = 0

//   let complexComputation = useCallback(function(){
//     console.log("text written inside input ", input)
//   }, [input])
 
//   function increaseHandler(){
//    setCount(count + 1)
//   }

//   useEffect(()=>{
//       console.log("effect running")
//   },[complexComputation])

//   complexComputation()

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseHandler}>+</button>
//       <input type='text' onChange={(e)=> setInput(e.target.value)} />
//       <p>{input}</p>
//     </div>
//   )
// }

// export default App
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Explore from "./components/Explore"
import Profile from "./components/Profile"
import Posts from './components/Posts'
import Reels from './components/Reels'
import Error from './components/Error'

function App() {
  return (
    <div>
      <nav style={{
        display: "flex",
        gap: "10px"
      }}>
        <Link to="/home">Home</Link> 
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/profile' element={<Profile />}>
          <Route path='/profile/posts' element={<Posts />}/>
          <Route path='/profile/reels' element={<Reels />}/>
        </Route>
        <Route path='*' element={<Error />}/>
        

      </Routes>
    </div>
  )
}

export default App



