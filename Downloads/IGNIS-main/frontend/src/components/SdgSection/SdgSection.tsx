import React from 'react';
import './SdgSection.css';
import sdgBg from '../../assets/images/sdg4.png';

const SdgSection = () => {
    return (
        <section className="sdg-section home-snap-section">
            <div 
                className="sdg-bg-image" 
                style={{ backgroundImage: `url(${sdgBg})` }}
            ></div>

            <div className="sdg-container">
            </div>
        </section>
    );
};

export default SdgSection;
