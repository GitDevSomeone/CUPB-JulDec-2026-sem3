import React from 'react'

function Child(props){
    return<>
        <h1 style={{
            color: props.cl
        }}>Welcome {props.un}</h1>
    </>
}

export default Child