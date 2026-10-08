import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    function submitHandler(event){
        event.preventDefault()
        if(name == "" || group == "" || gender == ""){
            console.log("error")
            setStatus("all the fields are not filled")
        }else{
            setStatus("form submitted successfully")
            console.log(name, group, gender) // fetch request - backend
        }
    }

  return (
    
    <form onSubmit={submitHandler}> 
        <label>name</label> 
        <input type='text' 
            onChange={(event)=> {
                let newVal = event.target.value
                if(!newVal.includes("@")){
                    setName(newVal)
                }
            } }
            value={name}
        /> <br />
  
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
        </select> <br />
        <label>Gender </label>
        <input type='radio' name='gender' 
        onChange={()=> setGender("male")}
        checked={gender == "male"}
        /> male
        <input type='radio' name='gender' 
        onChange={()=> setGender("female")}
        checked={gender == "female"}
        /> female <br/>
        <button>submit</button>
        {status}
    </form>
  )
}

export default Form
