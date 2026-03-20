import React from 'react'
import "./Popular.css"
import Item from "../Item/Item"
import data_product from '../../assets/data'

const Popular = () => {
  return (
    <section className='popular'>
      <div className="popular-header">
        <h2>POPULAR IN WOMEN</h2>
        <hr className="header-line" />
      </div>
      
      <div className='popular-item'>
        {data_product.map((item, i) => {
          // Using the spread operator to automatically pass all properties
          return <Item key={i} {...item} />
        })}
      </div>
    </section>
  )
}

export default Popular