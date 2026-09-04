import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar />
            
            <section className="contact-info-section">
                <div className="contact-header">
                    <h1 className="contact-title">Find Us & Get In Touch</h1>
                    <div className="contact-divider">
                        <div className="contact-line"></div>
                        <div className="contact-diamond">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3d2a23" stroke="none"><path d="M12 2l3.09 6.91L22 12l-6.91 3.09L12 22l-3.09-6.91L2 12l6.91-3.09L12 2z"/></svg>
                        </div>
                        <div className="contact-line"></div>
                    </div>
                </div>

                <div className="contact-content-container">
                    {/* Google Map Card */}
                    <div className="map-card">
                        <iframe 
                            src="https://maps.google.com/maps?q=Ignis%20Careers%20Private%20Limited,%20Skill%20Avenue,%20Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ignis Careers Map Location"
                        ></iframe>
                    </div>

                    {/* Contact Cards Info */}
                    <div className="contact-cards-container">
                        {/* Visit Us */}
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <h3>VISIT US</h3>
                            <p className="contact-address">
                                Ignis Careers, Skill Avenue,<br />
                                Hill Fort Rd, Ambedkar Colony,<br />
                                Adarsh Nagar, Hyderabad,<br />
                                Telangana 500004
                            </p>
                            <div className="contact-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#7a1c1c" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                <span>Hyderabad, Telangana</span>
                            </div>
                        </div>

                        <div className="contact-card-divider"></div>

                        {/* Call Us */}
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h3>CALL US</h3>
                            <p className="contact-subtitle">
                                Have any questions<br />
                                regarding Ignis?
                            </p>
                            <a href="tel:04023292001" className="contact-button filled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                040 2329 2001
                            </a>
                        </div>

                        <div className="contact-card-divider"></div>

                        {/* Contact Us */}
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <h3>CONTACT US</h3>
                            <p className="contact-subtitle">
                                Send us an email.
                            </p>
                            <a href="mailto:contact@igniscareers.com" className="contact-button outlined">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                contact@igniscareers.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Contact;
