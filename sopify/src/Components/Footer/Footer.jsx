import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"

const Footer = () => {
  // Get the current year dynamically so you never have to manually update it again
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        <div className="footer-logo">
            <img src={logo} alt="Shopify Logo" />
            <p>Shopify</p>
        </div>

        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer-icon-container">
                <img src={facebook_icon} alt="Facebook" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr/>
            {/* Replaced the hardcoded 2023 with the dynamic year variable */}
            <p>Copyright @ {currentYear} - All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer