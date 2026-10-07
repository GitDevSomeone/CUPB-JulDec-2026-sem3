import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState({})
    

    function submitHandler(event){
        event.preventDefault()
        const newError = {}

        if(name == ""){
            newError.name = "Name field is required"
        }

        if(name == "himanshu") {
            newError.name = "name cannot be himanshu"
        }

      

        if(group == ""){
            newError.group = "Group field is required"
        }

        if(gender == ""){
            newError.gender = "gender field is required" 
        }

        setErrors(newError)
    }
  return (
    <form onSubmit={submitHandler}>
        name: <input type='text' 
            style={{
                backgroundColor: errors.name ? "red" : ""
            }}
            onBlur={()=>{
                  if(!/^[A-Za-z]*$/.test(name)){
                    //    setErrors(()=>{
                    //      let copyError = {...errors}
                    //      copyError.name = "it should only contain normal charachter"
                    //      return copyError
                    //    })

                       setErrors({...errors, name: "it should only contain normal charachter"})
                    }
        
            }}
            onChange={(event)=> setName(event.target.value) }
            value={name}/><br/>

            <p style={{color: "red"}}>{errors.name}</p>

        

        group: 
        <select onChange={(event)=> setGroup(event.target.value)}
            value={group}
            >
            <option value="">--select group--</option>
            <option value="g13">G13</option>
            <option value="g14">G14</option>
            <option value="g15">G15</option>
            <option value="g16">G16</option>
        </select><br/>

        <p style={{color: "red"}}>{errors.group}</p>

        gender:
        <input type='radio' name="gender" 
        onChange={()=> setGender("male")}
        checked={gender == "male"}
        />male

        <input type='radio' name='gender' 
        onChange={()=> setGender("female")}
        checked={gender == "female"}/>female<br/>

        <p style={{color: "red"}}>{errors.gender}</p>


        <button>submit</button>
  
    </form>
  )
}

export default Form
