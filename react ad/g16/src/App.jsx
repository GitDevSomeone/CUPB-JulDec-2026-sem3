// import React from "react";
// import Card from "./components/Card";

// let students = [
//   {
//     name: "Himanshu",
//     group: "g16",
//     marks: 20,
//   },
//   {
//     name: "Gautam",
//     group: "g16",
//     marks: 18,
//   },
//   {
//     name: "Suryansh",
//     group: "g16",
//     marks: 12,
//   },
//   {
//     name: "Suryansh",
//     group: "g16",
//     marks: 12,
//   },
   
// ];

// function App() {
//   return (
//     <>
//       {students.map(function (value, index) {
//         return (
//            <Card student={value}/>
//         );
//       })}
//     </>
//   );
// }

// export default App


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

// import Child from "./components/Child";

// let username = "chitkara"

// function App(){
//   return <>
//     <Child un={username} cl="red"/>
//     <Child un="Pranay" cl="blue"/>
//   </>
// }

// export default App;


// import React from 'react'
// import G16 from "./components/G16"

// let username = "Himanshu"

// function App() {
//   return (
//     <div>
//       <G16 
//       user="Sukhreet"  
//       age={1234} 
//       arr={[1,2,3,4]}
//       bool={true}
//       obj={{
//         name: "Himanshu"
//       }}
//       func={function(){
//         return "Hello"
//       }}
//       />

//     </div>
//   )
// }

// export default App


// import React from "react";
// import Cards from "./components/Cards";

// let students = [
//   {
//     name: "Himanshu",
//     group: "g16",
//     marks: 20,
//   },
//   {
//     name: "Gautam",
//     group: "g16",
//     marks: 18,
//   },
//   {
//     name: "Suryansh",
//     group: "g16",
//     marks: 12,
//   },
//   {
//     name: "Suryansh",
//     group: "g16",
//     marks: 12,
//   },
   
// ];

// function App() {
//   return (
//     <>
//       <Cards arr={students} />
//     </>
//   );
// }

// export default App


// import React, {useState} from 'react'
// // import {useState} from 'react'

// function App() {
//   // let count = 0
//   let [count, setCount] = useState(0)
//   const [string, setString] = useState("")
//   const [bool, setBool] = useState(true)

  
//   function increaseCount(){
//     // count ++
//     // console.log(count)
//     // setCount(prev + 1)
//     // setCount(prev + 1)
//     // setCount(prev + 1)
    
//     // setCount(function(prev){
//       //   return prev + 1
//       // })
//       setCount((prev) => prev + 1)
      
      
//     }
    
//     function decreaseCount(){
//       setCount(count - 1) 
//     }
    
//     function inputHandler(event){
//       console.log(event.target.value)
//       setString((prev) => event.target.value)
//     }
    
//     function boolHandler(){
//       // setBool(()=> bool == true ? false : true)
//       setBool((prev)=> !prev )
//     }
    
// const [arr, setArr] = useState([1,2,3,4])
// const [obj, setObj] = useState({
//   name: "himanshu",
//   age: 123
// })

//   function pushHandler(){
//     setArr(function(prev){
//       let copyarr = [...prev]
//       let d = copyarr.pop()
//       copyarr.push(d)
//       return copyarr
//     })
//   }

//   function ageIncrease(){
//     setObj(function(prev){
//       let copyObj = {...prev}
//       copyObj.age = prev.age + 1
//       return copyObj

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

//       <p style={{
//         color: bool == true ? "red" : "green"
//       }}
//       >hello g16</p>
//       <button onClick={boolHandler}>change boolean value</button>

//       <ul>
//         {arr.map(function(value, index){
//           return <li key={index}>{value}</li>
//         })}
//       </ul>

//       <button onClick={pushHandler}>push element</button>

//       <p>name: {obj.name}</p>
//       <p>age: {obj.age}</p>

//       <button onClick={ageIncrease}>increase age</button>



//     </div>
//   )
// }

// export default App

/**
 * install a library for routing - react-router-dom
 * wrapping our app component with BrowserRouter
 * create required components for routing
 * binding of paths/url to its corresponding components
 * import Routes and Route
 * import required components into app.jsx
 * import Link tag
 */

import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'

function App() {
  return (


    <div>

    <nav >
      <Link to="/home">Home</Link> 
      <Link to="/explore">Explore</Link> 
      <Link to="/profile">Profile</Link>
    </nav>


      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App


