import React from 'react'
import Gc from './Gc'

function G15(props) {
   
  return (
    <div>
     <h1>Welcome {props.uname} of age {props.age}</h1>
     <h2>{props.str}</h2> 
     <h3>{props.bool}</h3>
     <h4>{props.func()}</h4>
     <h4>{props.arr}</h4>
     <h4>{props.obj.course}</h4>
    </div>
  )
}

export default G15
