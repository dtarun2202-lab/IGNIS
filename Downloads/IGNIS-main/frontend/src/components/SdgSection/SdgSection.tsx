import React from 'react';
import './SdgSection.css';
import sdgBg from '../../assets/images/sdg4.png';

// Media Logos
import inc42 from '../../assets/images/media-logos/inc-42.png';
import edtech from '../../assets/images/media-logos/edu-tech-review.jpg';
import et from '../../assets/images/media-logos/economic-times.jpg';
import bw from '../../assets/images/media-logos/BW-education.png';
import yourstory from '../../assets/images/media-logos/your-story.jpg';
import tt from '../../assets/images/media-logos/Telangana-Today.jpg';
import manorama from '../../assets/images/media-logos/On-Manorama.png';
import bline from '../../assets/images/media-logos/Business-Line.jpg';

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

            {/* Media Recognition Banner */}
            <div className="media-recognition-banner">
                <div className="media-header">
                    <div className="media-subtitle">
                        RECOGNITION <div className="media-line"></div>
                    </div>
                    <h3 className="media-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon left-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        IGNIS IN MEDIA
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon right-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    </h3>
                    <div className="media-placeholder"></div>
                </div>
                
                <div className="media-carousel-wrapper">
                    <div className="carousel-track">
                        {/* First set of logos */}
                        <img src={inc42} alt="Inc42" />
                        <img src={edtech} alt="EdTechReview" />
                        <img src={et} alt="Economic Times" />
                        <img src={bw} alt="BW Education" />
                        <img src={yourstory} alt="YourStory" />
                        <img src={tt} alt="Telangana Today" />
                        <img src={manorama} alt="On Manorama" />
                        <img src={bline} alt="Business Line" />
                        
                        {/* Second set of logos for seamless infinite scrolling */}
                        <img src={inc42} alt="Inc42" />
                        <img src={edtech} alt="EdTechReview" />
                        <img src={et} alt="Economic Times" />
                        <img src={bw} alt="BW Education" />
                        <img src={yourstory} alt="YourStory" />
                        <img src={tt} alt="Telangana Today" />
                        <img src={manorama} alt="On Manorama" />
                        <img src={bline} alt="Business Line" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SdgSection;
