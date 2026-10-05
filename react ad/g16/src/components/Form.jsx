import React,{useState} from 'react'

function Form() {
    const [ name, setName ] = useState("")
  return (
    <>
        <form>
        <label>Name</label>
        <input type='text' 
            value={name}
            onChange={(event)=> {
                let str ;
                str = event.target.value.replace(/[@#$123]/g, "")
                setName(str)
            }}
        /> <br />
        {name} <br />
        <label>group</label>
        <select>
            <option>g10</option>
            <option>g11</option>
            <option>g12</option>
            <option>g13</option>
            <option>g14</option>
            <option>g15</option>
            <option>g16</option>
        </select> <br/>

        <label>gender</label>
        <input type='radio' name='gender'/> male
        <input type='radio' name='gender'/> female <br />

        <label>subject</label>
        <input type='checkbox' /> fee2
        <input type='checkbox' /> dbms
        <input type='checkbox' /> java <br/>

        <button>submit</button>


        </form>
        <button onClick={()=> setName("")}>clear name</button>
    </>
  )
}

export default Form
