import React, { useState } from 'react'
import "./customdropdown.css"

function CustomDropDown(props) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState(" -- select option --") 
    // ↑ ↓
  return (
    <div className='main'>
        <div className='dropdown-select'
         onClick={()=> setShowOptions(!showOptions)}   
        >{selectedOption}  <span className='arrow'>{showOptions == true ? "↑" : "↓"}</span></div> 

      {showOptions == true ? <div className='dropdown-options'>
        {props.option.map((value, index)=>{
           return  (<div className='option' 
                onClick={
                    ()=> {
                        setSelectedOption(value)
                        setShowOptions(false)
                    }
                }>{value}</div>)
        })}
      </div> : <></>}

      
    </div>
  )
}

export default CustomDropDown
