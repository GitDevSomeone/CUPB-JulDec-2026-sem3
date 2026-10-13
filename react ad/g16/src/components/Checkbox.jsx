import React, { useState } from 'react'

function Checkbox() {
    const [subjects, setSubjects] = useState([])

    function changeHandler(event){
        if(event.target.checked){
            setSubjects([...subjects, event.target.value])
        }else{
            const newArr = [...subjects]
            const index = newArr.indexOf(event.target.value)
            newArr.splice(index, 1)
            setSubjects(newArr)
        }
    }
  return (
    <div>
        <p>{subjects}</p>
      <input type="checkbox" value="fee" onClick={changeHandler}/>FEE
      <input type="checkbox" value="dbms" onClick={changeHandler}/>DBMS
      <input type="checkbox" value="java" onClick={changeHandler}/>JAVA
    </div>
  )
}

export default Checkbox
