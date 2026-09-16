import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function loginHandler(){
        if(username == "user1" && password == "user1"){
            localStorage.setItem('isLoggedIn', "true")
            navigate("/home")

        }else{
            navigate("/")
        }
    }
  return (
    <div>
      username: <input type='text' 
      onChange={(event)=> setUsername(event.target.value)}/> <br />
      password: <input type='password' 
      onChange={(event)=> setPassword(event.target.value)}/><br/>

        <button onClick={loginHandler}>login</button>
    </div>
  )
}

export default Login
