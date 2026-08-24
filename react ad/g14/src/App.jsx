// import React from 'react'
// import G14 from './components/G14'

// let loggedInUser = "Himanshu"

// function App() {
//   return (
//     <div>
//       <G14 
//       uname={loggedInUser}
//       age={23}
//       cl="red"
//       bool = {true}
//       arr={[1,2,4]}
//       obj={{
//         course: "bee"
//       }}
//       func= {
//         function(){
//           return "Hello world"
//         }
//       }

//       />


//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Cards from './components/Cards'

// let students = [
//   {
//     name: "Himanshu",
//     group: "g14",
//     marks: 20
//   }, {
//     name: "A",
//     group: "g14",
//     marks: 9
//   }, {
//     name: "B",
//     group: "g14",
//     marks: 15
//   }
// ]

// function App() {
//   return (
//     <div>
//       <Cards studentArr={students}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import {useState} from 'react'

// function App() {

//     // let count = 0
//     let [count, setCount] = useState(0)
//     let [string, setString] = useState("")
//     let [bool, setBool] = useState(false)

    

//     function increaseCount(){
//         setCount(function(prev){
//             return prev * 1
//         })
       

//     //    setCount(prev + 1)
//     //    setCount(prev + 1) 
//     //    setCount(prev + 1) 
//     }

//     function decreaseCount(){
//         setCount(count - 1)
//     }

//     function inputHandler(event){
//         setString(function(prev){
//             return prev + event.target.value
//         })
//     }

//     function colorChanger(){
//         // setBool(function(prev){
//         //     return prev == true ? false : true
//         // })
//          setBool(function(prev){
//             return !prev
//         })
//     }

//     let [arr, setArr] = useState([1,2,3,4])
//     let [obj, setObj] = useState({
//         name: "chitkara",
//         age: 283
//     })

//     function pushHandler(){
//         setArr(function(prev){
//             // make a copy of array
//             let copyArr = [...prev]
//             copyArr.push(arr.length + 1)
//             return copyArr
//         })
//     }

//     function increaseAge(){
//         setObj(function(prev){
//             let copyObj = {...prev}
//             copyObj.age = prev.age + 1
//             return copyObj
//         })

//         // setObj((prev) => {return {...prev, age: prev.age + 1}})
//     }

//   return (
//     <div>
//         <p>{string}</p>
//       <button onClick={decreaseCount}>-</button>
//       <p>{count}</p>
//       {/* <button onclick="increaseCount()">+</button> */}
//       <button onClick={increaseCount}>+</button>

//       <input type='text' onChange={inputHandler}/>
//       <p>{string}</p>

//       <p
//         style={{
//             color: bool == true 
//             ? "red" : "green"
//         }}
//         onClick={colorChanger}
//       >Hello Chitkara</p>

//       <ul>
//         {arr.map(function(value, index){
//             return <li key={index}>{value}</li>
//         })}
//       </ul>
//       <button onClick={pushHandler}>push Element</button>

//       <p>name: {obj.name}</p>
//       <p>age: {obj.age}</p>

//       <button onClick={increaseAge}>increase Age</button>

     
//     </div>
//   )
// }

// export default App

/**
 * install a library called react-router-dom
 * to wrap my app component between a parent component 
 * called BrowserRouter
 * mapping of component to its corresponding urls
 * import Routes and Route 2 inbuild component from react-router-dom
 */

import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'

function App() {
  return (
    <div>

        <nav>
            <Link to="/home">Home</Link> |
            <Link to="/explore">Explore</Link> |
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



