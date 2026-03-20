import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
       {/* Wrapped the whole card in the Link for a larger, easier click target */}
       <Link 
         to={`/product/${props.id}`} 
         onClick={() => window.scrollTo(0,0)} 
         className="item-link"
       > 
         <div className="item-image-wrapper">
            <img src={props.image} alt={props.name} />
         </div>
         
         <div className="item-info">
            <p className="item-name">{props.name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    {/* Added the $ symbol to match the new price formatting */}
                    ${props.old_price} 
                </div>
            </div>
         </div>
       </Link>
    </div>
  )
}

export default Item