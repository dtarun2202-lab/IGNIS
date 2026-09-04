import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CSR.css';
import '../../components/SdgSection/SdgSection.css'; // For the Partners Banner styles
import CsrImpactSection from './CsrImpactSection';
import CsrResearchSection from './CsrResearchSection';
import CsrLifeSkillsSection from './CsrLifeSkillsSection';
import CsrEmploymentSection from './CsrEmploymentSection';
import CsrTeacherTrainingSection from './CsrTeacherTrainingSection';

// Partner Logos
import apssdp from '../../assets/images/partners-logos/APSSDP.jpg';
import acumen from '../../assets/images/partners-logos/Acumen.png';
import etNow from '../../assets/images/partners-logos/ET-now.png';
import htParekh from '../../assets/images/partners-logos/HT-parekh.png';
import iicIitK from '../../assets/images/partners-logos/IIC-IIT-K.png';
import yunnus from '../../assets/images/partners-logos/YUNNUS.png';
import deshpande from '../../assets/images/partners-logos/deshpande-foundation.jpg';
import educateGirls from '../../assets/images/partners-logos/educate-girls.jpg';
import evidya from '../../assets/images/partners-logos/evidya.png';
import millerCenter from '../../assets/images/partners-logos/miller-center.png';

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
        id: "rural-teacher-fellows",
        title: "Rural Teacher\nFellows Programme",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        )
    },
    {
        id: "research-capacity-building",
        title: "Research and\nCapacity Building",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
        )
    },
    {
        id: "life-skills-girls",
        title: "Life Skills\nfor Girls",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
        )
    },
    {
        id: "employment-enhancement",
        title: "Employment Enhancement\nProgramme for Youth",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        )
    },
    {
        id: "teacher-training",
        title: "Teacher Training for\nParticipatory Learning",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
        )
    }
];

const CSR = () => {
    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for sticky navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="csr-page">
            <Navbar />
            <section className="csr-hero">
                <div className="csr-hero-left">
                    <div className="csr-subtitle-wrapper">
                        <span className="csr-subtitle">CSR SUPPORT</span>
                        <div className="csr-subtitle-line"></div>
                    </div>
                    <h1 className="csr-main-title">
                        Creating Opportunities.<br/>
                        Building Stronger<br/>
                        <span className="csr-red-text">Communities.</span>
                    </h1>
                    <p className="csr-description">
                        Through collaborative partnerships, we empower<br/>
                        educators, equip young learners and strengthen<br/>
                        communities for a better tomorrow.
                    </p>
                </div>
            </section>
            
            <section className="csr-programs-section">
                <div className="csr-programs-grid">
                    {programs.map((program, index) => (
                        <div 
                            className="csr-program-card" 
                            key={index}
                            onClick={() => handleScrollToSection(program.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="csr-program-icon-wrapper">
                                {program.icon}
                            </div>
                            <h3 className="csr-program-title">
                                {program.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < program.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <div className="csr-program-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="partners-banner csr-partners-banner">
                <div className="partners-header">
                    <h3 className="media-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon left-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        OUR PARTNERS
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="leaf-icon right-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    </h3>
                </div>
                
                <div className="media-carousel-wrapper">
                    <div className="carousel-track-reverse">
                        <div className="logo-group">
                            {/* First set of logos */}
                            <img src={educateGirls} alt="Educate Girls" />
                            <img src={evidya} alt="eVidyaloka" />
                            <img src={etNow} alt="ET Now" />
                            <img src={apssdp} alt="APSSDP" />
                            <img src={htParekh} alt="HT Parekh Foundation" />
                            <img src={millerCenter} alt="Miller Center" />
                            <img src={iicIitK} alt="IIC IIT K" />
                            <img src={acumen} alt="Acumen" />
                            <img src={deshpande} alt="Deshpande Foundation" />
                            <img src={yunnus} alt="YUNNUS" />
                        </div>
                        <div className="logo-group">
                            {/* Second set of logos for seamless infinite scrolling */}
                            <img src={educateGirls} alt="Educate Girls" />
                            <img src={evidya} alt="eVidyaloka" />
                            <img src={etNow} alt="ET Now" />
                            <img src={apssdp} alt="APSSDP" />
                            <img src={htParekh} alt="HT Parekh Foundation" />
                            <img src={millerCenter} alt="Miller Center" />
                            <img src={iicIitK} alt="IIC IIT K" />
                            <img src={acumen} alt="Acumen" />
                            <img src={deshpande} alt="Deshpande Foundation" />
                            <img src={yunnus} alt="YUNNUS" />
                        </div>
                    </div>
                </div>
            </div>

            <CsrImpactSection />
            <CsrResearchSection />
            <CsrLifeSkillsSection />
            <CsrEmploymentSection />
            <CsrTeacherTrainingSection />

            <div className="media-recognition-banner csr-partners-banner">
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

            
            <Footer />
        </div>
    );
};

export default CSR;
