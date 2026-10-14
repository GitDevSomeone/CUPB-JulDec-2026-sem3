import React from 'react'
import "./popup.css"

function Popup(props) {
    setTimeout(()=>{
        props.onClose(false)
    },4000)
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Section G14</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda vitae minus dignissimos possimus, dolores iste debitis dolor? Cum natus sint ipsam molestias itaque mollitia cupiditate maxime unde adipisci numquam!</p>
      </div>
    </div>
  )
}

export default Popup
