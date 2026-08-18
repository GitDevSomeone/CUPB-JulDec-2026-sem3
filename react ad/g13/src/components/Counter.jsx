import React from 'react'
import {useState} from "react"

function Counter() {

    let [count, setCount] = useState(0)
    let [string, setString] = useState("")
    let [bool, setBool] = useState(false)
    let [student, setStudent] = useState([1,2,3,4])
    let [obj, setObj] = useState({
      name: "asdfasd",
      age: 12
    })

    function clickHandler(){
        // setCount(count + 1)
        // setCount(count + 1) 
        // setCount(count + 1)

        setCount(function(prev){
          return prev + 1
        })
       
    }

    function inputHandler(event){
      console.log(event.target.value)
      setString(function(){
        return event.target.value
      })
    }

    function boolHandler(){

       setBool((prev) => !prev)
      // setBool(function(prev){
      //   return false
      // })
    }

    function pushHandler(){
      // setStudent(function(prev){
      //   let newArr = [...prev]
      //   newArr.push(5)
      //   return newArr
      // })

      setStudent(function(prev){
        let newArr = [...prev]
        return newArr.pop()
        // return newArr
      })
    }

    function ageIncrease(){
      setObj(function(prev){
        let newObj = {...prev}
        // newObj.name = prev.name +  " sharma"
        newObj.address = "Chitkara university"
        return newObj
      })
    }

  return (
    <div>
      {/* <button onclick="clickHandler()">click</button>  HTML way */}
      <h1>{count}</h1>
      <button onClick={clickHandler}>+</button>

      <input type='text' onChange={inputHandler} />

      <p>{string}</p>

      <p>{bool == true ? "true" : "false"}</p>
      <button onClick={boolHandler}>change boolean value</button>

      <ul>
        {student.map((value, index)=>{
          return <li key={index}>{value}</li>
        })}
      </ul>
      <button onClick={pushHandler}>element push</button>

      <p>name: {obj.name}</p>
      <p>age: {obj.age}</p>
      <p>address: {obj.address}</p>

      <button onClick={ageIncrease}>Age increase</button>

    </div>
  )
}

export default Counter
