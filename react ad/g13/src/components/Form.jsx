import React,{useState} from 'react'

function Form() {
    const [ name, setName ] = useState("")
    const [ group, setGroup ] = useState("g10")
    const [ gender, setGender ] = useState("")
    const [ subject, setSubject ] = useState([])
    // console.log(name)
  return (
    <>
    <form>
        name: <input type='text' 
        value={name}
        onChange={(event)=> {  
            let str = event.target.value.replace(/[12@#]/g, "")
            setName(str)
            
        }}/> <br/>
        {name}<br />
  

        group: <select>
            <option>g10</option>
            <option>g11</option>
            <option>g12</option>
            <option>g13</option>
        </select> <br />
        gender: 
        <input type='radio' name='gender'/> male
        <input type='radio' name='gender'/> female <br/>
        subject: <input type='checkbox' /> dbms
        <input type='checkbox' /> fee2
        <input type='checkbox' /> java <br/>

        <button>submit</button>

    </form>
    <button onClick={()=> setName("")}>clear name</button>
    </>
  )
}

export default Form
