import {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    function submitHandler(event){
        event.preventDefault()
        if(name == "" || group == "" || gender == ""){
            console.log("fill all the fields")
            setStatus("fill out all the fields")
        }else{
            console.log(name, group, gender) // fetch request - backend
            setStatus("form submitted successfully")
        }
    }
  return (
    <form onSubmit={submitHandler}>
        name: <input type='text' 
            onChange={(event)=> setName(event.target.value) }
            value={name}/><br/>

        

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

        gender:
        <input type='radio' name="gender" 
        onChange={()=> setGender("male")}
        checked={gender == "male"}
        />male

        <input type='radio' name='gender' 
        onChange={()=> setGender("female")}
        checked={gender == "female"}/>female<br/>


        <button>submit</button>
        <h2>{status}</h2>
    </form>
  )
}

export default Form
