import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroActions = () => {
    return (
        <div className="hero-actions">
            <Link to="/csr-support" className="action-card action-card-primary">
                <div className="action-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        <path d="M15.5 20v-5c0-1.4-1.1-2.5-2.5-2.5h-2c-1.4 0-2.5 1.1-2.5 2.5v5"/>
                        <path d="M6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        <path d="M9 20v-3.5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2V20"/>
                        <path d="M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        <path d="M20 20v-3.5c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2V20"/>
                    </svg>
                </div>
                <div className="action-card-content">
                    <h3 className="action-card-title">
                        CSR / NGO <span className="diagonal-arrow">↗</span>
                    </h3>
                    <p className="action-card-desc">
                        We implement and design programs for<br/>NGOs and CSRs.
                    </p>
                </div>
                <div className="action-card-bg-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                    </svg>
                </div>
            </Link>
            
            <Link to="/for-schools" className="action-card action-card-secondary">
                <div className="action-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 20h20" />
                        <path d="M9 20V7l3-3 3 3v13" />
                        <path d="M12 4v-2" />
                        <path d="M12 2h3v2h-3" />
                        <path d="M4 20v-9h5" />
                        <path d="M20 20v-9h-5" />
                        <path d="M10.5 20v-3.5a1.5 1.5 0 0 1 3 0V20" />
                        <rect x="5.5" y="14" width="2" height="2" />
                        <rect x="16.5" y="14" width="2" height="2" />
                        <circle cx="12" cy="11" r="1.5" />
                    </svg>
                </div>
                <div className="action-card-content">
                    <h3 className="action-card-title">
                        FOR SCHOOLS <span className="diagonal-arrow">↗</span>
                    </h3>
                    <p className="action-card-desc">
                        Capacity building programs for schools
                    </p>
                </div>
                <div className="action-card-bg-icon">
                     <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default HeroActions;
