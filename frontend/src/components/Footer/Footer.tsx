import React, { useState } from 'react';
import './Footer.css';
import ignisLogo from '../../assets/logos/ignis-logo.jpg';

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="footer-section home-snap-section">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <img src={ignisLogo} alt="Ignis Careers" className="footer-logo-img" />
                        </div>
                        <p className="footer-tagline">
                            IGNITING CHANGE.<br />
                            BUILDING EQUALITY.<br />
                            CREATING IMPACT.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/ignis-careers/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://www.youtube.com/@ignis_careers" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </a>
                        </div>
                    </div>

                    <div className={`footer-col accordion-col ${openSection === 'about' ? 'open' : ''}`}>
                        <h4 onClick={() => toggleSection('about')}>
                            ABOUT US
                            <span className="accordion-icon">{openSection === 'about' ? '−' : '+'}</span>
                        </h4>
                        <ul className="accordion-content">
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">What We Do</a></li>
                            <li><a href="#">Our Impact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className={`footer-col accordion-col ${openSection === 'focus' ? 'open' : ''}`}>
                        <h4 onClick={() => toggleSection('focus')}>
                            OUR FOCUS
                            <span className="accordion-icon">{openSection === 'focus' ? '−' : '+'}</span>
                        </h4>
                        <ul className="accordion-content">
                            <li><a href="#">SDG Goals</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Initiatives</a></li>
                            <li><a href="#">Get Involved</a></li>
                        </ul>
                    </div>

                    <div className={`footer-col accordion-col ${openSection === 'resources' ? 'open' : ''}`}>
                        <h4 onClick={() => toggleSection('resources')}>
                            RESOURCES
                            <span className="accordion-icon">{openSection === 'resources' ? '−' : '+'}</span>
                        </h4>
                        <ul className="accordion-content">
                            <li><a href="#">News & Stories</a></li>
                            <li><a href="#">Reports & Publications</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Media Kit</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4>CONTACT US</h4>
                        <ul>
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>Ignis Careers, Skill Avenue,<br />Hill Fort Rd, Ambedkar Colony,<br />Adarsh Nagar, Hyderabad,<br />Telangana 500004</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <span>040 2329 2001</span>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <span>contact@igniscareers.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h4>STAY CONNECTED</h4>
                        <p>Subscribe to our newsletter</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Email address" required />
                            <button type="submit">&gt;</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        Copyright 2019 © IGNIS CAREERS
                    </div>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Refund Policy</a>
                    </div>
                    <div className="made-with-love">
                        Designed with ❤️ for a better tomorrow
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
