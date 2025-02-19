import React from 'react'
import './index.css'

export default function Button3({ buttonClass, buttonId }) {
  return (
    <div className='container'>
        <button id={buttonId || 'button3'} className={buttonClass || 'button-default btn'}>3</button>
    </div>
  )
}