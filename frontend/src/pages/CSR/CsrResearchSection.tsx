import React from 'react';
import './CsrResearchSection.css';
import booksImage from '../../assets/images/Untitled design (10).png';
import swingImage from '../../assets/images/Untitled design (11).png';

const CsrResearchSection = () => {
    return (
        <section id="research-capacity-building" className="csr-research-section">
            <div className="csr-research-header">
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
                <h2 className="csr-research-title">
                    <span>Research and </span>
                    <span className="csr-red-text">Capacity Building</span>
                </h2>
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
            </div>

            <div className="csr-research-container">
                <div className="csr-research-content">
                    <p className="csr-research-description">
                        Ignis is fuelled by its best in class research which develops curriculum
                        that is both age and culturally appropriate for the target beneficiaries.
                        Ignis has supported English and Life Skills curriculum development for
                        various organizations and foundations that work with vulnerable
                        communities across India.
                    </p>
                    <p className="csr-research-description">
                        The work involved studying the language skills of the students, mapping
                        their exposure to English, mapping their cultural background, building a
                        corpus of words appropriate for the developmental milestones and putting
                        together a curriculum based on these findings.
                    </p>
                    <p className="csr-research-description">
                        We also support organizations in developing educational support programs
                        appropriate for their mission, suitable for the cultural contexts that they
                        operate in. This involves skills survey, field based research, curriculum
                        development, training and capacity building, continual monitoring and
                        implementation support.
                    </p>

                    <div className="csr-research-features">
                        <div className="csr-feature-item">
                            <div className="csr-feature-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                            </div>
                            <div className="csr-feature-text">
                                <h4>Survey</h4>
                                <ul>
                                    <li>Closely study the cultural context of the target group</li>
                                    <li>Analyse the learning needs of the group</li>
                                </ul>
                            </div>
                        </div>

                        <div className="csr-feature-item">
                            <div className="csr-feature-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                            </div>
                            <div className="csr-feature-text">
                                <h4>Development</h4>
                                <ul>
                                    <li>Develop learning program based on the findings</li>
                                    <li>Pilot and modify the model</li>
                                </ul>
                            </div>
                        </div>

                        <div className="csr-feature-item">
                            <div className="csr-feature-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e44249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div className="csr-feature-text">
                                <h4>Implementation Support</h4>
                                <ul>
                                    <li>Recruit trainers, train of trainers</li>
                                    <li>Continuous monitoring</li>
                                    <li>Pre- and post-program assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="csr-research-visuals">
                    <div className="csr-research-images-wrapper">
                        <div className="csr-research-image-main">
                            <img src={booksImage} alt="Ignis Foundation Books" />
                        </div>
                        <div className="csr-research-image-overlap">
                            <img src={swingImage} alt="Girl on tire swing" />
                        </div>
                        
                        <div className="csr-research-badge">
                            <div className="csr-badge-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                            </div>
                            <div className="csr-badge-text">
                                <span className="dark-text">Culturally relevant. Research driven.</span><br/>
                                <span className="red-text">Built for impact.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CsrResearchSection;
