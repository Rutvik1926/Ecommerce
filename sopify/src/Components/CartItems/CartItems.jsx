import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const { getTotalCartAmount, getTotalCartItems, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // If the cart is completely empty, show a friendly empty state
    if (getTotalCartItems() === 0) {
        return (
            <div className='cart-empty'>
                <h2>Your cart is currently empty.</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
            </div>
        )
    }

    return (
        <div className='cartItems'>
            {/* Desktop Headers */}
            <div className="cartitems-format-main headers">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            
            {/* Cart Items List */}
            <div className="cartitems-list">
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className='cartitems-format-main cart-row'>
                                    <img src={e.image} alt={e.name} className="cart-product-img" />
                                    <p className="cart-product-title">{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity'>
                                        {cartItems[e.id]}
                                    </button>
                                    <p className="item-total-price">${e.new_price * cartItems[e.id]}</p>
                                    <img 
                                        src={remove_icon} 
                                        alt="remove" 
                                        className="cartitems-remove-icon" 
                                        onClick={() => removeFromCart(e.id)} 
                                    />
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    return null;
                })}
            </div>

            {/* Bottom Section (Totals & Promo) */}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>Cart Totals</h2>
                    <div className="totals-container">
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item total-bold">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                </div>

                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems