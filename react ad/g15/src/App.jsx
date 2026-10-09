// // import React from "react";

// // let student = [
// //   {
// //     name: "Himanshu",
// //     group: "g15",
// //     marks: 20,
// //   },
// //   {
// //     name: "Saksham",
// //     group: "g15",
// //     marks: 13,
// //   },
// //   {
// //     name: "Pratham",
// //     group: "g15",
// //     marks: 15,
// //   },
// //   {
// //     name: "Siya",
// //     group: "g15",
// //     marks: 10,
// //   },
// // ];


// // function App() {
// //   return (
// //     <>
// //       {student.map(function (value, index) {
// //         return (
// //           <div
// //             style={{
// //               height: "200px",
// //               width: "150px",
// //               border: value.marks>=15? "1px solid red": "1px solid green",
// //               // backgroundColor: value.marks < 15 ? "red" : "green",
// //               // color: "white",
// //               // display: value.marks>=15 ? "block" : "none",
              
// //             }}
// //           >
// //             <p>name: {student[index].name}</p>
// //             <p>group: {value.group}</p>
// //             <p>marks: {value.marks}</p>
// //             <p>status: {value.marks < 15 ? "Fail": "Pass"}</p>
// //           </div>
// //         );
// //       })}

      
// //     </>
// //   );
// // }

// // export default App;


// // import React from 'react'
// // import G15 from './components/G15'

// // let loggedInUser = "Himanshu"

// // function App() {
// //   return (
// //     <div>
// //       <G15 
// //       uname={loggedInUser}
// //       age={1234}
// //       str="hello world"
// //       bool={true}
// //       func={
// //         function(){
// //           return "Hello Himanshu"
// //         }
// //       }
// //       arr={[1,2,3,4]}
// //       obj={{
// //         course: "Bee"
// //       }}
// //       />
// //     </div>
// //   )
// // }

// // export default App

// import React from "react";
// import Cards from "./components/Cards";

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
//      <Cards stud={student}/>
//     </>
//   );
// }

// export default App;


// import React, {useState} from 'react'


// function App() {
//   // let count = 0
//   const [count, setCount] = useState(0)
//   const [string, setString] = useState("")

//   function increaseCount(){
//     setCount(function(prev){
//       return count + 1
//     })

//     // setCount(function(prev){
//     //   return prev + 1
//     // })
//     // setCount(function(prev){
//     //   return prev + 1
//     // })
//     // setCount(prev + 1)
//     // setCount(prev + 1)
//     // setCount(prev + 1)
//   }

//   function decreaseCount(){
//     setCount(count - 1)
//   }

//   function inputHandler(event){
//     // console.log(event.target.value)
//     setString(function(prev){
//       return prev + event.target.value
//     })
    
//   }
//   return (
//     <div>
//       <button onClick={decreaseCount}>-</button>
//       <p>{count}</p>
//       {/* <button onclick="increaseCount()">+</button> */}
//       <button onClick={increaseCount}>+</button>

//       <input type='text' onChange={inputHandler}/>
//       <p>{string}</p>

      
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [arr, setArr] = useState([1,2,3,4])
//   const [obj, setObj] = useState({
//     name: "himanshu",
//     age: 10
//   })

//   function increaseHandler(){
//     setCount(()=>{
//       return count + 1
//     })
//   }

//   function pushHandler(){
//     setArr(()=>{
//       let copyArr = [...arr]
//       let d = copyArr.pop()
//       copyArr.push(d)
//       return copyArr

//       // arr.push(5)
//       // return arr
//     })
//   }

//   function ageHandler(){
//     setObj(()=>{
//       let copyObj = {...obj}
//       copyObj.age = obj.age + 1
//       return copyObj
//     })
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseHandler}>+</button>
//       <h2>{arr}</h2>
//       <button onClick={pushHandler}>push element</button>
//       <p>name: {obj.name}</p>
//       <p>age: {obj.age}</p>
//       <button onClick={ageHandler}>increase Age</button>

//     </div>
//   )
// }

// export default App



// import React,{useState, useEffect} from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [input, setInput] = useState("")
//   function increaseHandler(){
//     setCount(()=>{
//       return count + 1
//     })
//   }
//   function inputHandler(event){
//     setInput(event.target.value)
//   }
//   useEffect(()=>{
//     console.log("effect after count ran")
//   }, [count])
//   useEffect(()=>{
//     console.log("effect after input ran")
//   }, [input])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseHandler}>+</button>
//       <input type='text' 
//         onChange={inputHandler}
//       />
//     </div>
//   )
// }

// export default App


// import React,{useState, useEffect, useCallback} from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   let count2 = useCallback(function (){
//     console.log(count)
//     // 10000 loc
//   } ,[count])
//   count2()
//   function increaseHandler(){
//     setCount(()=>{
//       return count + 1
//     })
//   }
//   useEffect(()=>{
//     // console.log("effect ran")
//   }, [count2])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseHandler}>+</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './components/Home'
// import Explore from './components/Explore'
// import Profile from './components/Profile'
// import Photos from './components/Photos'
// import Reels from './components/Reels'
// import Login from './components/Login'
// import {Routes, Route, Link} from 'react-router-dom'
// import ProtectedRoutes from './components/ProtectedRoutes'

// function App() {
//   return (
//     <div>
//       <nav style={{display:"flex", gap: "10px"}}>
//         <Link to="/home">Home</Link> 
//         <Link to="/explore">Explore</Link>
//         {/* <Link to="/profile">Profile</Link> */}
//         {/* <Link to="/profile/smark">smarks's profile</Link>
//         <Link to="/profile/himanshu">himanshu's profile</Link> */}

//       </nav>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path='/home' element={
//           <ProtectedRoutes>
//             <Home />
//           </ProtectedRoutes>
          
//           } />
//         <Route path='/explore' element={
//           <ProtectedRoutes>
//             <Explore />
//           </ProtectedRoutes>
          
//           } />
//         {/* <Route path='/profile/:username/:profile' element={<Profile />} /> */}
//         {/* <Route path='/profile/himanshu' element={<Profile />} />
//         <Route path='/profile/smark' element={<Profile />} />
//         <Route path='/profile/raghav' element={<Profile />} /> */}


//         {/* <Route path='/profile' element={<Profile />} >
//           <Route path='/profile/photos' element={<Photos />} />
//           <Route path='/profile/reels' element={<Reels />} />
//         </Route>  */}
//       </Routes>
//     </div>
//   )
// }

// export default App


// import {useState} from 'react'
// import Child from './components/Child'
// import { createContext } from 'react'

// export const UserContext = createContext()


// function App() {
//   const [username, setUsername] = useState("himanshu")
//   return (
//     <UserContext.Provider value={username}>
//       <div style={{
//         border: "1px solid black",
//         padding: "3px"
//       }}>
//         <h1>this is App Component</h1>
        
//         <Child  />
//       </div>
//     </UserContext.Provider>
//   )
// }

// export default App


import React from 'react'
import Form from "./components/Form"

function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App




