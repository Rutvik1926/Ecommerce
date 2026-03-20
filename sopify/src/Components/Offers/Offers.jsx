import React from 'react'
import "./Offers.css"
import exclusive from "../../assets/exclu.webp"

const Offers = () => {
  return (
    <section className='offers'>
      <div className="offers-container">
        
        <div className="offers-left">
           <h2>Exclusive</h2>
           <h2>Offers For You</h2>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className="offers-btn">Check Now</button>
        </div>
        
        <div className="offers-right">
            <img src={exclusive} alt="Exclusive Offer" className="offers-img" />
        </div>

      </div>
    </section>
  )
}

export default Offers