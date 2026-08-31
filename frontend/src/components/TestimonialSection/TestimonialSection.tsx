import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
    return (
        <section className="testimonial-section home-snap-section">
            <div className="testimonial-container">
                <div className="testimonial-header-top">
                    <span className="testimonial-subtitle">
                        <div className="testimonial-line"></div>
                        TESTIMONIALS 
                        <div className="testimonial-line"></div>
                    </span>
                </div>
                
                <div className="testimonial-header-center">
                    <h2 className="testimonial-title">What People Say</h2>
                    <p className="testimonial-description">
                        Hear from the community, schools, and partners<br />
                        who have experienced our impact firsthand.
                    </p>
                    <div className="testimonial-diamond-separator">
                        <div className="diamond"></div>
                    </div>
                </div>

                <div className="testimonial-grid">
                    {/* Testimonial 1 */}
                    <div className="testimonial-card">
                        <div className="quote-icon-container">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#b81d22" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                <path d="M14.017 21L16.417 14.59C16.647 13.97 16.767 13.33 16.767 12.69C16.767 10.11 14.677 8 12.107 8V11C13.037 11 13.787 11.75 13.787 12.68C13.787 13.06 13.667 13.43 13.447 13.75L12.017 16.21L14.017 21ZM6.01697 21L8.41697 14.59C8.64697 13.97 8.76697 13.33 8.76697 12.69C8.76697 10.11 6.67697 8 4.10697 8V11C5.03697 11 5.78697 11.75 5.78697 12.68C5.78697 13.06 5.66697 13.43 5.44697 13.75L4.01697 16.21L6.01697 21Z"/>
                            </svg>
                        </div>
                        <h4 className="testimonial-card-title">Great Support!</h4>
                        <p className="testimonial-card-text">
                            "There is a great demand and craze for English. Parents are sending their kids to private English medium schools. Because of this, Ignis is helpful for rural students to nurture their confidence and language skills."
                        </p>
                        <div className="testimonial-author-wrapper">
                            <div className="author-avatar bg-red-gradient">PR</div>
                            <div className="testimonial-author">
                                <span className="author-name">Mr. P. Baswa Rao</span>
                                <span className="author-designation">DEO, Khammam</span>
                                <div className="author-stars">★★★★★</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card">
                        <div className="quote-icon-container">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#b81d22" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                <path d="M14.017 21L16.417 14.59C16.647 13.97 16.767 13.33 16.767 12.69C16.767 10.11 14.677 8 12.107 8V11C13.037 11 13.787 11.75 13.787 12.68C13.787 13.06 13.667 13.43 13.447 13.75L12.017 16.21L14.017 21ZM6.01697 21L8.41697 14.59C8.64697 13.97 8.76697 13.33 8.76697 12.69C8.76697 10.11 6.67697 8 4.10697 8V11C5.03697 11 5.78697 11.75 5.78697 12.68C5.78697 13.06 5.66697 13.43 5.44697 13.75L4.01697 16.21L6.01697 21Z"/>
                            </svg>
                        </div>
                        <h4 className="testimonial-card-title">Ignis – A Delight!</h4>
                        <p className="testimonial-card-text">
                            "Indeed, like any other principal, I had my own apprehensions, because the children over here are from a rural set-up and they hardly speak in English because they are first-generation learners. I tried to look into many aspects before I went with Ignis, but I must say at this juncture that it has really worked wonders. I am delighted at the way the children are excited for the ELSL class and at the same time, the teachers also are very interested in attending the ELSL trainings. To see the teachers come together and the children working well, and coming up is definitely a delight for the principal"
                        </p>
                        <div className="testimonial-author-wrapper">
                            <div className="author-avatar bg-dark-gradient">AR</div>
                            <div className="testimonial-author">
                                <span className="author-name">Mrs. N. Aruna Rao</span>
                                <span className="author-designation">Principal, Pallavi Model School, Bouduppal</span>
                                <div className="author-stars">★★★★★</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card">
                        <div className="quote-icon-container">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#b81d22" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
                                <path d="M14.017 21L16.417 14.59C16.647 13.97 16.767 13.33 16.767 12.69C16.767 10.11 14.677 8 12.107 8V11C13.037 11 13.787 11.75 13.787 12.68C13.787 13.06 13.667 13.43 13.447 13.75L12.017 16.21L14.017 21ZM6.01697 21L8.41697 14.59C8.64697 13.97 8.76697 13.33 8.76697 12.69C8.76697 10.11 6.67697 8 4.10697 8V11C5.03697 11 5.78697 11.75 5.78697 12.68C5.78697 13.06 5.66697 13.43 5.44697 13.75L4.01697 16.21L6.01697 21Z"/>
                            </svg>
                        </div>
                        <h4 className="testimonial-card-title">Excellent Service!</h4>
                        <p className="testimonial-card-text">
                            "Ignis' approach towards building communication skills is in the right direction and the program they have designed provides a lot of support to teachers ... Ignis was the best service provider we have worked with."
                        </p>
                        <div className="testimonial-author-wrapper">
                            <div className="author-avatar bg-gray-gradient">SR</div>
                            <div className="testimonial-author">
                                <span className="author-name">Ms. Shravya Reddy</span>
                                <span className="author-designation">Presidency High School, Nizamabad</span>
                                <div className="author-stars">★★★★★</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
