import React, { useState, useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <nav className='navbar'>
            <Link to="/" className="nav-logo" onClick={() => setMenu("home")}>
                <img src={logo} alt="Shopify Logo" />
                <p>Shopify</p>
            </Link>

            <ul className='nav-menu'>
                <li 
                    onClick={() => setMenu("home")} 
                    className={menu === "home" ? "active" : ""}
                >
                    <Link to="/">Home</Link>
                </li>
                <li 
                    onClick={() => setMenu("mens")} 
                    className={menu === "mens" ? "active" : ""}
                >
                    <Link to="/mens">Men</Link>
                </li>
                <li 
                    onClick={() => setMenu("womens")} 
                    className={menu === "womens" ? "active" : ""}
                >
                    <Link to="/womens">Women</Link>
                </li>
                <li 
                    onClick={() => setMenu("kids")} 
                    className={menu === "kids" ? "active" : ""}
                >
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
                
                {/* Wrapped cart and badge in a relative container for stable positioning */}
                <Link to="/cart" className="cart-icon-wrapper" onClick={() => setMenu("cart")}>
                    <img src={cart_icon} alt="Cart" />
                    {getTotalCartItems() > 0 && (
                        <div className="nav-cart-count">{getTotalCartItems()}</div>
                    )}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar