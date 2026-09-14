import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    return (
        <section className="team-section home-snap-section">
            <div className="team-container">
                <div className="team-header-top">
                    <span className="team-subtitle">IGNIS PILLARS <div className="team-line"></div></span>
                </div>
                
                <div className="team-header-center">
                    <h2 className="team-title">Our Team</h2>
                    <p className="team-description">
                        A passionate group of changemakers working together<br />
                        to build a more equal and sustainable world.
                    </p>
                    <div className="team-diamond-separator">
                        <div className="diamond"></div>
                    </div>
                </div>

                <div className="team-carousel-wrapper">
                    <button className="carousel-btn prev-btn">❮</button>
                    
                    <div className="team-cards-container">
                        {[1, 2, 3, 4].map((index) => (
                            <div className="team-card" key={index}>
                                <div className="team-card-top"></div>
                                <div className="team-card-image-wrapper">
                                    <div className="team-card-image-placeholder"></div>
                                </div>
                                <div className="team-card-bottom">
                                    <h3 className="team-card-name">Name Placeholder {index}</h3>
                                    <p className="team-card-role">Role Placeholder</p>
                                    <div className="team-card-social">
                                        <div className="social-link"><span className="icon-in">in</span> username</div>
                                        <div className="social-link"><span className="icon-mail">✉</span> email@ignis.org</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn next-btn">❯</button>
                </div>
                
                <div className="carousel-indicators">
                    <span className="indicator active"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
