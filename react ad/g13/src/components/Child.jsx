// import React from 'react'

// function Child(props) {
//   return (
//     <div>
//       <h1 style={{color: props.cl}}>Hello {props.username} of age {props.age}</h1>
//       <h2>{props.func()}</h2>
//       <h3>{props.arr}</h3>
//       <h4>{props.obj.group}</h4>
//     </div>
//   )
// }

// export default Child


import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div style={{border: "1px solid black", padding: "3px"}}>
      <h1>this is child component</h1>
      <GrandChild />
    </div>
  )
}

export default Child

