import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  
  // Added state to track which size the user has selected
  const [activeSize, setActiveSize] = useState('M');

  // Prevent crashing if product data hasn't loaded yet
  if (!product) return null;

  return (
    <div className='productdisplay'>
      {/* Left Column: Image Gallery */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="thumbnail" />
          <img src={product.image} alt="thumbnail" />
          <img src={product.image} alt="thumbnail" />
        </div>
        <div className='productdisplay-main-img-wrap'>
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>

      {/* Right Column: Product Info */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(130 Reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <span className="productdisplay-right-price-new">${product.new_price}</span>
          <span className="productdisplay-right-price-old">${product.old_price}</span>
        </div>

        <div className="productdisplay-right-description">
          A lightweight, premium garment designed for everyday comfort. Features modern styling, breathable fabric, and a tailored fit perfect for any casual occasion.
        </div>

        <div className='productdisplay-right-size'>
          <h3>Select Size</h3>
          <div className="productdisplay-right-sizes">
            {/* Mapped sizes to make it easy to apply the 'active' class */}
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
               <div 
                 key={size}
                 className={activeSize === size ? 'active-size' : ''}
                 onClick={() => setActiveSize(size)}
               >
                 {size}
               </div>
            ))}
          </div>
        </div>

        <button className="add-to-cart-btn" onClick={() => { addTocart(product.id) }}>
          ADD TO CART
        </button>

        <div className="productdisplay-meta">
          <p><span>Category:</span> Women, T-Shirt, Crop Top</p>
          <p><span>Tags:</span> Modern, Latest, Trend</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay