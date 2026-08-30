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
                <div className="sdg-text-content">
                    <span className="sdg-subtitle">OUR IMPACT</span>
                    <h2 className="sdg-title">Beyond Classrooms,<br />Our Connections</h2>
                    <div className="sdg-separator"></div>
                    <p className="sdg-description">
                        We work towards a sustainable future<br />
                        by empowering communities and creating<br />
                        equal opportunities for all.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SdgSection;
