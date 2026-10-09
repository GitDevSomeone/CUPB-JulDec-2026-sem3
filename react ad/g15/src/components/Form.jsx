import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("female")
    const [courses, setCourses] = useState([])
  return (
    <form>
      <label>Name </label>
      <input type='text' 
        onChange={(event)=> {
            if(!event.target.value.includes("@")){
                setName(event.target.value)
            }
        }}    
        value={name}
      /> <br />
<p>{group}</p>
      <label>group </label>
      <select onChange={(event)=> setGroup(event.target.value)}
            value={group}
        >
        <option value="">--select group--</option>
        <option value="g13">group 13</option>
        <option value="g14">group 14</option>
        <option value="g15">group 15</option>
        <option value="g16">group 16</option>
      </select> <br/>

      <label>Gender</label>
      <input type='radio' name='gender' 
      onChange={()=> setGender("male")}
      checked={gender == "male"}
      /> Male

      <input type='radio' name='gender' 
      onChange={()=> setGender("female")}
      checked={gender == "female"}
      /> Female <br/>

      <label>courses</label>
      <input type='checkbox' value="fee" />FEE
      <input type='checkbox' value="java" />JAVA
      <input type='checkbox' value="dbms" />DBMS



    </form>
  )
}

export default Form
