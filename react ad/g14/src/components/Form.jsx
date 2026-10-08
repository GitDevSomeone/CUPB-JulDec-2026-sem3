import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState({})

    function submitHandler(event){
        event.preventDefault()
        let newErrors = {}
        if(name == ""){
            newErrors.name = "name field is required"
        }
        
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
        <label>name</label> 
        <input type='text' 
            onBlur={()=>{
                if(/\d/.test(name)){
                    setErrors(()=>{
                        let copyObj = {...errors}
                        copyObj.name = "name should not contain numbers"
                        return copyObj
                    })

                }
            }}
            style={{
                backgroundColor: errors.name ? "red" : ""
            }}
            onChange={(event)=> {
                let newVal = event.target.value
                if(!newVal.includes("@")){
                    setName(newVal)
                }
            } }
            value={name}
        /> 
        <p 
        style={{color: "red"}}
        >{errors.name}</p>
        <br />
  
        <label>group </label>
        <select 
        onChange={(event) => setGroup(event.target.value)}
                value={group}
            >
            <option value="">--select option--</option>
            <option value="g13">G13</option>
            <option value="g14">G14</option>
            <option value="g15">G15</option>
            <option value="g16">G16</option>
        </select> 
        <p style={{color: "red"}}>{errors.group}</p>
        <br />
        <label>Gender </label>
        <input type='radio' name='gender' 
        onChange={()=> setGender("male")}
        checked={gender == "male"}
        /> male
        <input type='radio' name='gender' 
        onChange={()=> setGender("female")}
        checked={gender == "female"}
        /> female 
        
        <p style={{color: "red"}}>{errors.gender}</p>
        <br/>
        <button>submit</button>
    </form>
  )
}

export default Form
