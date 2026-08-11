import React from "react"

let students = ["Shivam", "Manpreet", "Vidhi", "himanshu"]

function App(){
  return (
    <>
      <ul>
       {students.map(function(value, index, array){
        return <li>{value}</li>
       })}
      </ul>
    </>
  )
}

export default App