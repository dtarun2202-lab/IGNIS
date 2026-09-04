import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Schools.css';
import '../../components/SdgSection/SdgSection.css'; // For the Partners Banner styles
import SchoolsElslSection from './SchoolsElslSection';
import SchoolsStemSection from './SchoolsStemSection';

// Media Logos
import inc42 from '../../assets/images/media-logos/inc-42.png';
import edtech from '../../assets/images/media-logos/edu-tech-review.jpg';
import et from '../../assets/images/media-logos/economic-times.webp';
import bw from '../../assets/images/media-logos/BW-education.png';
import yourstory from '../../assets/images/media-logos/your-story.png';
import tt from '../../assets/images/media-logos/Telangana-Today.png';
import manorama from '../../assets/images/media-logos/On-Manorama.png';
import bline from '../../assets/images/media-logos/Business-Line.jpg';
import bstandard from '../../assets/images/media-logos/Business-Standard.png';
import cnbc from '../../assets/images/media-logos/cbnc.png';
import etv from '../../assets/images/media-logos/etv.jpg';

const programs = [
    {
        title: "English and Life\nSkills Lab (ELSL)",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
        )
    },
    {
        title: "STEM Labs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .11 1.89l1.8 2.6a2 2 0 0 1-3.24 2.14L15.3 19a1.65 1.65 0 0 0-1.82.33l-2.65 2.2a2 2 0 0 1-2.58 0l-2.65-2.2a1.65 1.65 0 0 0-1.82-.33L1.08 21.6a2 2 0 0 1-3.24-2.14l1.8-2.6a1.65 1.65 0 0 0 .11-1.89L-2.2 12a1.65 1.65 0 0 0 0-1.89l-1.8-2.6a2 2 0 0 1 3.24-2.14L3.1 7a1.65 1.65 0 0 0 1.82-.33l2.65-2.2a2 2 0 0 1 2.58 0l2.65 2.2a1.65 1.65 0 0 0 1.82.33l2.77-1.6a2 2 0 0 1 3.24 2.14l-1.8 2.6a1.65 1.65 0 0 0-.11 1.89L24.2 12a1.65 1.65 0 0 0 0 1.89z"/></svg>
        )
    },
    {
        title: "Ignis Career\nAwareness Program",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        )
    }
];

const Schools = () => {
    return (
        <div className="schools-page">
            <Navbar />
            <section className="schools-hero">
                <div className="schools-hero-left">
                    <div className="schools-subtitle-wrapper">
                        <span className="schools-subtitle">FOR SCHOOLS</span>
                        <div className="schools-subtitle-line"></div>
                    </div>
                    <h1 className="schools-main-title">
                        Building Stronger<br/>
                        Learning Environments<br/>
                        for <span className="schools-red-text">Every Child.</span>
                    </h1>
                    <p className="schools-description">
                        Our school initiatives equip students and educators with the<br/>
                        skills, resources and opportunities they need to learn,<br/>
                        grow and thrive.
                    </p>
                </div>
            </section>
            
            <section className="schools-programs-section">
                <div className="schools-programs-grid">
                    {programs.map((program, index) => (
                        <div className="schools-program-card" key={index}>
                            <div className="schools-program-icon-wrapper">
                                {program.icon}
                            </div>
                            <h3 className="schools-program-title">
                                {program.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < program.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <div className="schools-program-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="media-recognition-banner csr-partners-banner" style={{ marginTop: '40px' }}>
                <div className="media-header" style={{ justifyContent: 'center' }}>
                    <h3 className="media-title" style={{ flex: 'none' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon left-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        IGNIS IN MEDIA
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon right-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    </h3>
                </div>
                
                <div className="media-carousel-wrapper">
                    <div className="carousel-track">
                        <div className="logo-group">
                            {/* First set of logos */}
                            <img src={inc42} alt="Inc42" />
                            <img src={edtech} alt="EdTechReview" className="logo-edtech" />
                            <img src={et} alt="Economic Times" className="logo-et" />
                            <img src={bw} alt="BW Education" />
                            <img src={yourstory} alt="YourStory" />
                            <img src={tt} alt="Telangana Today" />
                            <img src={manorama} alt="On Manorama" className="logo-manorama" />
                            <img src={bline} alt="Business Line" />
                            <img src={bstandard} alt="Business Standard" />
                            <img src={cnbc} alt="CNBC" />
                            <img src={etv} alt="ETV" />
                        </div>
                        <div className="logo-group">
                            {/* Second set of logos for seamless infinite scrolling */}
                            <img src={inc42} alt="Inc42" />
                            <img src={edtech} alt="EdTechReview" className="logo-edtech" />
                            <img src={et} alt="Economic Times" className="logo-et" />
                            <img src={bw} alt="BW Education" />
                            <img src={yourstory} alt="YourStory" />
                            <img src={tt} alt="Telangana Today" />
                            <img src={manorama} alt="On Manorama" className="logo-manorama" />
                            <img src={bline} alt="Business Line" />
                            <img src={bstandard} alt="Business Standard" />
                            <img src={cnbc} alt="CNBC" />
                            <img src={etv} alt="ETV" />
                        </div>
                    </div>
                </div>
            </div>
            
            <SchoolsElslSection />
            
            <SchoolsStemSection />
            
            <Footer />
        </div>
    );
};

export default Schools;
