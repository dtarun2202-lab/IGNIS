import React, { useState, useEffect } from 'react';
import './CsrImpactSection.css';

const videos = [
    { id: 'ijH1tiP5HQg', title: 'Video 1' },
    { id: 'wX1sKjGs5_8', title: 'Video 2' },
    { id: 'J-DMQStUyvU', title: 'Video 3' }
];

const CsrImpactSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % videos.length);
        }, 5000); // Swipe every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="rural-teacher-fellows" className="csr-impact-section">
            <div className="csr-research-header">
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
                <h2 className="csr-research-title">
                    <span>Rural Teacher </span>
                    <span className="csr-red-text">Fellows Programme</span>
                </h2>
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
            </div>

            <div className="csr-impact-container">
                <div className="csr-impact-content">
                    
                    <ul className="csr-impact-list">
                        <li>
                            <div className="check-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <p>Implemented in collaboration with CSR funds and NGOs. We have worked with over 88 government schools reaching about 26,000 students across Telangana, Andhra, Karnataka and Maharashtra.</p>
                        </li>
                        <li>
                            <div className="check-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <p>Our pilot program in the rural mandals of Khammam District, Telangana recruits and trains teacher aspirants from the region for 1-2 years based on location.</p>
                        </li>
                        <li>
                            <div className="check-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <p>The program uses English and Life Skills lab materials and culturally appropriate learning resources in remote and unique cultural contexts.</p>
                        </li>
                    </ul>
                    
                    <button className="csr-impact-btn">
                        VIEW IMPACT REPORT
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                
                <div className="csr-impact-video-wrapper">
                    <div className="csr-impact-video-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {videos.map((video) => (
                            <div className="csr-impact-slide" key={video.id}>
                                <iframe 
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0`} 
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                    <div className="csr-impact-dots">
                        {videos.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`csr-impact-dot ${idx === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(idx)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CsrImpactSection;
