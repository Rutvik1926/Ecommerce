import React from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join our community and get the best deals.</p>
        
        <div className='loginsignup-fields'>
          <div className="input-group">
            <input type='text' placeholder='Full Name' required />
          </div>
          <div className="input-group">
            <input type='email' placeholder='Email Address' required />
          </div>
          <div className="input-group">
            <input type='password' placeholder='Password' required />
          </div>
          <button className="main-btn">Create Account</button>
        </div>
        
        <p className="loginsignup-login">
          Already have an account? <span>Sign In</span>
        </p>

        <div className='loginsignup-agree'>
          <input type='checkbox' id='terms' />
          <label htmlFor='terms'>I agree to the <b>Terms of Service</b> & <b>Privacy Policy</b></label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup