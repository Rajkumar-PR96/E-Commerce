import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newslatter'>
        <h1>Get <span>Execlusive</span> Offers  On <span>Your</span>  Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
