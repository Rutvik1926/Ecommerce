import React from 'react'
import { Link } from 'react-router-dom';
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png"

const Bredcrums = (props) => {
  const { product } = props;

  // Safety check: Don't render if product data hasn't loaded yet
  if (!product) {
    return null; 
  }

  return (
    <div className='bredcrums-container'>
      <div className='bredcrums'>
        <Link to="/">Home</Link> 
        <img src={arrow_icon} alt="arrow" className="breadcrumb-arrow" />
        
        <Link to="/">Shop</Link> 
        <img src={arrow_icon} alt="arrow" className="breadcrumb-arrow" />
        
        {/* Dynamically links back to the specific category page */}
        <Link to={`/${product.category}s`}>{product.category}</Link> 
        <img src={arrow_icon} alt="arrow" className="breadcrumb-arrow" />
        
        {/* The current page is not a link, and gets highlighted styling */}
        <span className="breadcrumb-current">{product.name}</span>
      </div>
    </div>
  )
}

export default Bredcrums