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

                <div className="team-carousel-placeholder">
                    {/* Team cards will be added here later as requested */}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
