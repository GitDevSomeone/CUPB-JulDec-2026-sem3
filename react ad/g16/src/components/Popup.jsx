import React from 'react'
import "./popup.css"

function Popup(props) {
    setTimeout(()=>{
        props.onClose(false)
    },3000)
  return (
    <div className='modal' onClick={()=> props.onClose(false)}>
      <div className='modal-content'>
            <h1>Himanshu sharma</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nulla consequatur ullam explicabo assumenda voluptatem, at labore, molestias optio inventore hic sed fuga quisquam ducimus molestiae distinctio magnam ex amet!</p>
            {/* <button >close</button> */}
      </div>
    </div>
  )
}

export default Popup
