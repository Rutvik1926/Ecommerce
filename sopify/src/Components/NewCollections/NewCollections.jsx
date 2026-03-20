import React from 'react'
import "./NewCollections.css"
import new_collections from '../../assets/newcollections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <section className='newcollections'>
        <div className="newcollections-header">
            <h2>NEW COLLECTIONS</h2>
            <hr className="header-line" />
        </div>
        
        <div className='collections'>
            {new_collections.map((item, i) => {
                // Using the spread operator saves time and keeps code clean
                return <Item key={i} {...item} />
            })}
        </div>
    </section>
  )
}

export default NewCollections