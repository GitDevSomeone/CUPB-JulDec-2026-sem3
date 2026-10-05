import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    function submitHandler(e){
        e.preventDefault()
        if(name == "" || group == "" || gender == ""){
            console.log("fields are empty")
            setStatus("fields are empty")
        }else{
            console.log(name, group, gender)
            setStatus("form submitted successfully")
        }
        // fetch request -> backend   
    }

  return (
    <form onSubmit={submitHandler}>
        name: 
        <input type='text' 
            onChange={(e)=> setName(e.target.value)}
            value={name}
        /><br />

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

        gender: 
        <input type='radio' name='gender' 
        onChange={()=> setGender("male")}
            checked={gender == "male"}
        />Male
        <input type='radio' name='gender' onChange={()=> setGender("female")}
             checked={gender == "female"}
        />Female <br/>

        <button>Submit</button>
        <h5>{status}</h5>

    </form>
  )
}

export default Form
