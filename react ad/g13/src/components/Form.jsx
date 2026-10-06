import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState({})

    function submitHandler(e){
        e.preventDefault()
        console.log()
        const newError = {}
        if(name == ""){
            newError.name = "Name field is empty"
        }

        

        if(group == ""){
            newError.group = "Group field is empty"
        }

        if(gender == ""){
            newError.gender = "Gender field is empty"
        }

        if(name != "" && group != "" && gender != ""){
            console.log("form submitted successfully")
        }

        setErrors(newError)
    }

    

  return (
    <form onSubmit={submitHandler}>
        name: 
        <input type='text' 
            onChange={(e)=> setName(e.target.value)}
            value={name}
            onBlur={()=> {
                if(!/^[A-Za-z]*$/.test(name) && name != ""){
                    setErrors({...errors, name : "Name is not valid"})
                }
            }}
        /><br />
        <p style={{color: "red"}}>{errors.name}</p>

        group: 
        <select onChange={(e)=> setGroup(e.target.value)}
                value={group}
            >
            <option value="">--select group--</option>
            <option value="G13">G13</option>
            <option value="G14">G14</option>
            <option value="G15">G15</option>
            <option value="G16">G16</option>
        </select><br/>

        <p style={{color: "red"}}>{errors.group}</p>


        gender: 
        <input type='radio' name='gender' 
        onChange={()=> setGender("male")}
            checked={gender == "male"}
        />Male
        <input type='radio' name='gender' onChange={()=> setGender("female")}
             checked={gender == "female"}
        />Female <br/>

        <p style={{color: "red"}}>{errors.gender}</p>


        <button>Submit</button>
       

    </form>
  )
}

export default Form
