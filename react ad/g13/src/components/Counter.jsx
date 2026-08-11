import React from 'react'
import {useState} from "react"

function Counter() {

    let [count, setCount] = useState("himanshu")

    function clickHandler(){
        setCount(count * 1)
    }

  return (
    <div>
      {/* <button onclick="clickHandler()">click</button>  HTML way */}
      <h1>{count}</h1>
      <button onClick={clickHandler}>+</button>

    </div>
  )
}

export default Counter
