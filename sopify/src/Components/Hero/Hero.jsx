import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import hero_img from "../../assets/p8.webp" // Swapped 'men' for a more generic variable name

const Hero = () => {
  return (
    <div className='hero'>
      {/* Added a container to keep the max-width aligned with the rest of the site */}
      <div className="hero-container">
        
        <div className="hero-left">
          <h2 className="hero-subtitle">Best Deals! Best Prices!</h2>
          
          <div className="hero-title-wrap">
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="wave" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
          </div>
          
          <button className="hero-latest-btn">
              <span>Latest Collection</span>
              <img src={arrow_icon} alt="arrow" />
          </button>
        </div>
        
        <div className="hero-right">
          {/* Removed the hardcoded height="400px" so CSS can scale it responsibly */}
          <img src={hero_img} alt="Hero Collection" className="hero-img" />
        </div>

      </div>
    </div>
  )
}

export default Hero