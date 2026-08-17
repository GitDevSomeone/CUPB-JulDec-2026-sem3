import React from 'react'

function G14(props) {
  return (
    <div>
      <h1 style={{
        color: props.cl
      }}>Welcome {props.uname} of age {props.age}</h1>
      <h2>{props.bool}</h2>
      <h3>{props.arr}</h3>
      <h3>{props.obj.course}</h3>
      <h3>{props.func()}</h3>
    </div>
  )
}

export default G14
