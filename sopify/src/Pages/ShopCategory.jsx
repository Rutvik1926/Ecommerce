import React, { useContext } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <div className="banner-wrapper">
        <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
        <div className="banner-text">
          <h2>{props.category.toUpperCase()} COLLECTION</h2>
        </div>
      </div>

      <div className='shopcategory-indexSort'>
        <p className="results-count">
          Showing <span>1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="sort" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />
          }
          return null;
        })}
        
      </div>

      <div className="shopcategory-footer">
        <button className="loadmore-btn">Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory