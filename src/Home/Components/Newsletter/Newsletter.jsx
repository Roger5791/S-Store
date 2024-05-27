import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter section home-newsletter">
    <div className="newsletter-container container grid">
      <h3 className="newsletter-title flex">
        <img src="assets/img/icon-email.svg" alt="" className="newsletter-icon" />Sign up to Newsletter
      </h3>

      <p className="newsletter-description">
        ...and receive $25 coupon for your first order.
      </p>
      
      <div className="newsletter-form">
        <input type="text" placeholder="Enter your Email" className="newsletter-input" />
        <button type="button" className="newsletter-btn" id="newsSubmit">Submit</button>
      </div>

    </div>
  </div>
  )
}

export default Newsletter