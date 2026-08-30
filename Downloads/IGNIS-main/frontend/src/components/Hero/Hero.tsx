import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    {/* Content will go here later */}
                </div>
                <div className="hero-right">
                    <div className="story-carousel">
                        <div className="carousel-slide active-slide">
                            {/* The Main Hero Background Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Hero Background" 
                                className="slide-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
