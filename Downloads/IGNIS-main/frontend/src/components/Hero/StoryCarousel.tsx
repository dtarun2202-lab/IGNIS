import React from 'react';
import './Hero.css';

const StoryCarousel = () => {
    return (
        <div className="story-carousel">
            <div className="carousel-slide active-slide">
                <img 
                    src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Students smiling" 
                    className="slide-image"
                />
                <div className="slide-overlay-top">
                    <span className="slide-number-active">01</span><span className="slide-number-total">/07</span>
                </div>
                <div className="slide-overlay-bottom">
                    <p>
                        <span className="highlight-text">95%</span> of parents reported an improvement<br/>
                        in their child's quality of life.
                    </p>
                </div>
                
                <button className="carousel-next-btn" aria-label="Next Slide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
            
            <div className="carousel-slide next-slide-preview">
                <img 
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Students in classroom" 
                    className="slide-image"
                />
                <div className="slide-overlay-top">
                    <span className="slide-number-active">02</span><span className="slide-number-total">/07</span>
                </div>
            </div>
        </div>
    );
};

export default StoryCarousel;
