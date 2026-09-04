import React from 'react';
import './SchoolsElslSection.css';
import elslLabImage from '../../assets/images/ELCS-scaled.jpg';

const programmeHighlights = [
    { id: '01', text: 'Continuous Year Long Support', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ) },
    { id: '02', text: 'Affordable Capacity Building Package', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
    ) },
    { id: '03', text: "Based on the 'Whole Language Support' approach", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    ) },
    { id: '04', text: 'Age appropriate and culturally situated curriculum design', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
    ) },
    { id: '05', text: 'Life Skill learning in addition to language learning', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.53.9 3 1.5 4.5.76.76 1.23 1.52 1.41 2.5"></path></svg>
    ) },
    { id: '06', text: 'Promoting Joyful and purposeful learning', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    ) },
    { id: '07', text: 'Based on the Common European Framework of Reference for Languages (CEFR)', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    ) },
    { id: '08', text: 'Outcomes evaluated using state of the art measurement tools', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><path d="M22 22H2"></path></svg>
    ) },
];

const SchoolsElslSection = () => {
    return (
        <section className="elsl-section">
            {/* Header */}
            <div className="elsl-header">
                <div className="elsl-subtitle-container">
                    <div className="elsl-line"></div>
                    <span className="elsl-subtitle">IGNIS CAREERS INITIATIVE</span>
                    <div className="elsl-line"></div>
                </div>
                <h2 className="elsl-main-title">English and Life Skills Lab (ELSL)</h2>
                <div className="elsl-diamond-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#b81d22" stroke="none"><path d="M12 2l3.09 6.91L22 12l-6.91 3.09L12 22l-3.09-6.91L2 12l6.91-3.09L12 2z"/></svg>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="elsl-content-grid">
                
                {/* Left Column: Text */}
                <div className="elsl-left-col">
                    <h3 className="elsl-left-title">
                        Empowering young minds with<br/>
                        <span className="elsl-red-text">English & Essential Life Skills</span>
                    </h3>
                    <p className="elsl-desc">
                        This is Ignis Careers' flagship product. It is a comprehensive school partnership aimed at imparting English and Life Skills to students and creating a culture of joyful learning in schools.
                    </p>
                    <p className="elsl-desc">
                        The integrated Life Skills component covers Problem Solving, Decision Making, Creative Thinking, Critical Thinking, Self Awareness, Empathy, Interpersonal Relationship, Good Communication, and Emotional Balance, as recommended by WHO and UNICEF.
                    </p>
                    <p className="elsl-desc">
                        The English language component focuses on actual language use, eschewing theoretical, rules-based instruction for a participatory application based approach to language learning. Students are encouraged to speak, make mistakes and learn from their mistakes to build confidence.
                    </p>
                </div>

                {/* Center Column: Image */}
                <div className="elsl-center-col">
                    <img src={elslLabImage} alt="Students in English and Life Skills Lab" className="elsl-center-image" />
                </div>

                {/* Right Column: Highlights */}
                <div className="elsl-right-col">
                    <div className="elsl-highlights-header">
                        <div className="elsl-star-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#e44249" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h4>PROGRAMME HIGHLIGHTS</h4>
                    </div>
                    
                    <div className="elsl-highlights-list">
                        {programmeHighlights.map((item, idx) => (
                            <div className="elsl-highlight-item" key={idx}>
                                <div className="elsl-highlight-number">
                                    <div className="elsl-highlight-number-shape">{item.id}</div>
                                </div>
                                <div className="elsl-highlight-text">{item.text}</div>
                                <div className="elsl-highlight-icon">{item.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Info Cards */}
            <div className="elsl-info-cards">
                <div className="elsl-card">
                    <div className="elsl-card-icon pink-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <p>The year-long support programme includes 42 hours of teacher training and curriculum orientation.</p>
                </div>
                <div className="elsl-card">
                    <div className="elsl-card-icon yellow-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <p>The training focuses on helping teachers adopt a participatory, learner-centred approach to education that focuses on understanding and internalising concepts than memory.</p>
                </div>
                <div className="elsl-card">
                    <div className="elsl-card-icon green-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <p>ELSL comprises 8 levels of a level appropriate and culturally relevant curriculum for Class 2 to Class 10. The carefully created lessons and activities.</p>
                </div>
            </div>

            {/* Impact Videos Section */}
            <div className="elsl-impact-section">
                <div className="elsl-impact-header">
                    <div className="elsl-branch-icon left-branch">🌿</div>
                    <h3 className="elsl-impact-title">SEE OUR IMPACT IN ACTION</h3>
                    <div className="elsl-branch-icon right-branch">🌿</div>
                </div>
                
                <div className="elsl-videos-container">
                    <div className="elsl-video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/7nyQzSlvT18" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="elsl-video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/lqIuYYqgZW4" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolsElslSection;
