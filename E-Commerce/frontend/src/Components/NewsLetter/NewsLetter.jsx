import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Execlusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
