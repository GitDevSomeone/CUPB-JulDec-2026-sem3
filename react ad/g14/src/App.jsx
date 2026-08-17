// import React from 'react'
// import G14 from './components/G14'

// let loggedInUser = "Himanshu"

// function App() {
//   return (
//     <div>
//       <G14 
//       uname={loggedInUser}
//       age={23}
//       cl="red"
//       bool = {true}
//       arr={[1,2,4]}
//       obj={{
//         course: "bee"
//       }}
//       func= {
//         function(){
//           return "Hello world"
//         }
//       }

//       />


//     </div>
//   )
// }

// export default App


import React from 'react'
import Cards from './components/Cards'

let students = [
  {
    name: "Himanshu",
    group: "g14",
    marks: 20
  }, {
    name: "A",
    group: "g14",
    marks: 9
  }, {
    name: "B",
    group: "g14",
    marks: 15
  }
]

function App() {
  return (
    <div>
      <Cards studentArr={students}/>
    </div>
  )
}

export default App

