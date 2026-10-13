import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState({})
    

    function submitHandler(event){
      event.preventDefault()
      const newErrors = {}
      
      if(name == ""){
        newErrors.name = "name field is required"
      }

      // if()

      if(group == ""){
        newErrors.group = "group field is required"
      }

      if(gender == ""){
        newErrors.gender = "gender field is required"
      }

      setErrors(newErrors)
     
    }
    
  return (
    <form onSubmit={submitHandler}>
      <label>Name </label>
      <input type='text' 
        style={{
          backgroundColor: errors.name ? "red" : ""
        }}
        onChange={(event)=> {
            if(!event.target.value.includes("@")){
                setName(event.target.value)
            }
        }}    
        value={name}
      /> <br />
      <p style={{color: "red"}}>{errors.name}</p>
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

      <p style={{color: "red"}}>{errors.group}</p>


      <label>Gender</label>
      <input type='radio' name='gender' 
      onChange={()=> setGender("male")}
      checked={gender == "male"}
      /> Male

      <input type='radio' name='gender' 
      onChange={()=> setGender("female")}
      checked={gender == "female"}
      /> Female <br/>


      <p style={{color: "red"}}>{errors.gender}</p>


        <button>submit</button>
        

    </form>
  )
}

export default Form
