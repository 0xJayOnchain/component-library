import React from 'react'
import './index.css'

export default function Button1({ buttonClass, buttonId }) {
  return (
    <div className='container'>
      <div id={buttonId || 'button1'} className={buttonClass || 'button-style1 btn'}>1</div>
    </div>
  )
}