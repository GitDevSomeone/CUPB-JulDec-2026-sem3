import React, { useState } from 'react'
import "./customdropdown.css"

function CustomDropDown(props) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")
  return (
    <div className='main'>
      <div onClick={()=> setShowOptions(!showOptions)} 
      className='selected-option-div'>{
        selectedOption.length != 0 ? selectedOption : "-- select a value --"}</div>
        {showOptions ?  <div className='option-div'>
           { props.option.map((value, index)=>{
                return ( <div className='option' onClick={()=> {
                setSelectedOption(value)
                setShowOptions(false)
                }}> {value}</div>)
            })}
      </div> : <></> }
     
    </div>
  )
}

export default CustomDropDown
