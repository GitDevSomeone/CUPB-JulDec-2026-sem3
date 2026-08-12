import React from 'react'

function G16(props){
    return(
        <>
            <h1>welcome {props.user} of age {props.age}</h1>
            <h2>{props.arr}</h2>
            <h3>{props.bool}</h3>
            <h4>{props.obj.name}</h4>
            <h5>{props.func()}</h5>
        </>
    )
}

export default G16