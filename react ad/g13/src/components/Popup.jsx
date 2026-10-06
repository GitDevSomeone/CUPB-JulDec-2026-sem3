import React from 'react'
import "./popup.css"

function Popup(props) {
  return (
    <div className='modal' onClick={()=>props.onClose(false)}>
        <div className='modal-content'>
            <h1>Himanshu Sharma</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo cum sed iste officiis, ad molestiae, blanditiis earum illum odit ducimus, inventore sunt provident nihil quidem eaque laboriosam officia incidunt.</p>
        </div>
    </div>
  )
}

export default Popup
