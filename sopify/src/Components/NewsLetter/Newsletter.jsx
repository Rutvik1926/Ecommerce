import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className="newsletter-container">
        <h2>Get Exclusive Offers on Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        
        {/* Changed from a div to a form for better semantics and accessibility */}
        <form className="newsletter-input-group" onSubmit={(e) => e.preventDefault()}>
            <input type='email' placeholder='Your Email address' required />
            <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter