import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function loginHandler(){
        if(username == "user1" && password == "user1"){
            localStorage.setItem("loginStatus", "true")
            navigate("/home")
        }else{
            navigate("/")
        }
    }

  return (
    <div>
      <h1>Login Page</h1>
      username: <input type='text'
       onChange={(event)=> setUsername(event.target.value)}/><br/>

      password: <input type='password' 
        onChange={(event)=> setPassword(event.target.value)}
      /> <br/>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}
