import React, { useState } from 'react'
import "./dropdown.css"

function CustomDropDown(props) {
    const [showOptions, setShowOptions] = useState(false)
    const [selected, setSelected] = useState("--- select option ---")
  return (
    <div>
      <div 
        onClick={()=> setShowOptions(!showOptions)}
      className='dropdown-select'>{selected}<span>{
        showOptions == true ? "↑" : "↓"}</span></div>  
      {/* ↑ ↓ */}
      
      {showOptions == true ? (
        <div className='dropdown-options'>
                {props.options.map((value, index)=>{
                    return (
                        <div 
                            onClick={()=>{
                                setSelected(value)
                                setShowOptions(false)
                            }}
                        className='option'>
                            {value}
                        </div>
                    )
                })}
      </div>
    ) : <></>}

      
    </div>
  )
}

export default CustomDropDown
