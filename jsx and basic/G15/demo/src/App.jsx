import React from "react";

// let name =

let students = ["Himanshu", "Pranav", "Anshika", "random"];
let visible = true
let color = ""

if(visible == false){
  color = "green"
}else{
  color = "red"
}

function App() {
  return (
    <>
    <div>
      {visible == true ? <h1>Conditionally rendered element</h1> : <></>}
      
      {/* <h1 style="color: red; background-color: yellow">Hello world</h1> */}
      {visible == true ?  <h1 style={{color: "red"}}>Hello world</h1> : 
      <h1 style={{color: "green"}}>Hello world</h1>
      }

      <h1 style = {{
        color: visible == true ? "red" : "green"
      }}
      >Hello world optimised</h1>

       <h1 style = {{
        color: color
      }}
      >Hello world using if else</h1>

      <h1 style={{
        color: "red",
        backgroundColor: "yellow"
      }}>Hello world</h1>

    </div>
      <ul>
        {students.map(function (value, index, array) {
          return <li>{value}</li>;
        })}
      </ul>


      <div>
        {students.map(function (value, index, array) {
          return <button>{value}</button>;
        })}
      </div>


    </>
  );
}

export default App;
