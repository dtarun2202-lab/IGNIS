import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section home-snap-section">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="white"/>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="white" strokeWidth="2"/>
                            </svg>
                            <span>IGNIS</span>
                        </div>
                        <p className="footer-tagline">
                            IGNITING CHANGE.<br />
                            BUILDING EQUALITY.<br />
                            CREATING IMPACT.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon">f</a>
                            <a href="#" className="social-icon">in</a>
                            <a href="#" className="social-icon">ig</a>
                            <a href="#" className="social-icon">yt</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">What We Do</a></li>
                            <li><a href="#">Our Impact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>OUR FOCUS</h4>
                        <ul>
                            <li><a href="#">SDG Goals</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Initiatives</a></li>
                            <li><a href="#">Get Involved</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>RESOURCES</h4>
                        <ul>
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
                                <span>123 Impact Avenue,<br />Bengaluru, India - 560001</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <span>hello@ignis.org</span>
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
                        © 2024 IGNIS. All rights reserved.
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
