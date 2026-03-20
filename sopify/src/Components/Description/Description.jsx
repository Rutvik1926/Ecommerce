import React, { useState } from 'react'
import "./Description.css"

const Description = () => {
  // Added state to make the tabs functional
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div 
              className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
                Description
            </div>
            <div 
              className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
                Reviews (135)
            </div>
            
        </div>

        <div className="descriptionbox-content">
            {activeTab === 'description' ? (
                <div className="descriptionbox-text fade-in">
                    {/* Kept your original placeholder text but formatted it neatly */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium reiciendis exercitationem amet totam nisi ullam cumque fugit magnam laudantium. Quis eos quam alias nisi explicabo ut, itaque qui fuga officiis. Maxime labore in molestiae, debitis vel, rem modi repudiandae ullam ipsam delectus dolores quibusdam reiciendis, hic temporibus beatae at aut possimus reprehenderit.</p>
                    <p>Molestias ipsam, odit maxime aperiam magnam quo debitis explicabo accusamus placeat unde inventore qui voluptate distinctio. Dolorem in pariatur ullam error adipisci earum officiis fugit unde, blanditiis, harum minus cumque. Eligendi doloribus, officiis temporibus minima facilis officia est necessitatibus numquam blanditiis cum dignissimos vel unde fugit perspiciatis distinctio magnam, eos, qui repellendus quidem sunt nemo!</p>
                </div>
            ) : (
                <div className="descriptionbox-reviews fade-in">
                    {/* Placeholder for future review mapping */}
                    <div className="review-item">
                        <p>⭐⭐⭐⭐⭐ <b>"Absolutely love this product!"</b></p>
                        <p className="review-author">- Jane D.</p>
                    </div>
                    <div className="review-item">
                        <p>⭐⭐⭐⭐ <b>"Great quality, fast shipping."</b></p>
                        <p className="review-author">- Mark T.</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Description