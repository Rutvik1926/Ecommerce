import React from 'react'
import "./RealatedProducts.css" // Note: Rename your CSS file to fix the spelling!
import Item from '../Item/Item'
import data_product from '../../assets/data'

const RelatedProducts = () => {
  return (
    <section className='relatedproducts'>
        <div className="relatedproducts-header">
            <h2>Related Products</h2>
            <hr className="header-line" />
        </div>
        
        <div className="relatedproducts-item">
            {data_product.map((item, i) => {
                 // Using the spread operator for cleaner prop passing
                 return <Item key={i} {...item} />
            })}
        </div>
    </section>
  )
}

export default RelatedProducts