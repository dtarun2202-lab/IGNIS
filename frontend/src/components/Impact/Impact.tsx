import React, { useEffect, useState, useRef } from 'react';
import './Impact.css';
import mapImage from '../../assets/images/our-reach-map.png';

// Simple custom hook for animated counting
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - percentage, 3);
            
            setCount(Math.floor(end * easeProgress));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return { count, ref };
};

const StatItem = ({ icon, endValue, label, suffix = '+' }: { icon: React.ReactNode, endValue: number, label: string, suffix?: string }) => {
    const { count, ref } = useCountUp(endValue);
    
    // Format number with commas (Indian numbering system format if needed, but localestring works fine)
    const formattedCount = count.toLocaleString('en-IN');
    
    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-icon-wrapper">
                {icon}
            </div>
            <div className="stat-content">
                <h3 className="stat-value">{formattedCount}{suffix}</h3>
                <p className="stat-label">{label}</p>
            </div>
        </div>
    );
};

const Impact = () => {
    return (
        <section className="impact-section home-snap-section">
            <div className="impact-container">
                <div className="impact-left">
                    <div className="impact-subtitle-wrapper">
                        <span className="impact-subtitle">OUR IMPACT</span>
                        <div className="impact-subtitle-line"></div>
                    </div>
                    
                    <h2 className="impact-title">
                        <span className="impact-title-black">IGNITING LEARNING.</span><br />
                        <span className="impact-title-red">ACROSS INDIA.</span>
                    </h2>
                    
                    <p className="impact-description">
                        Empowering students, supporting teachers and partnering with communities to build a brighter tomorrow.
                    </p>
                    
                    <div className="impact-stats">
                        <StatItem 
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                </svg>
                            }
                            endValue={404000}
                            label="Direct reach Learner's"
                        />
                        <StatItem 
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 20h20" />
                                    <path d="M9 20V7l3-3 3 3v13" />
                                    <path d="M12 4v-2" />
                                    <path d="M12 2h3v2h-3" />
                                    <path d="M4 20v-9h5" />
                                    <path d="M20 20v-9h-5" />
                                    <path d="M10.5 20v-3.5a1.5 1.5 0 0 1 3 0V20" />
                                    <circle cx="12" cy="11" r="1.5" />
                                </svg>
                            }
                            endValue={1500}
                            label="schools"
                        />
                        <StatItem 
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            }
                            endValue={15000}
                            label="Teachers"
                        />
                        <StatItem 
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                                    <path d="M2 12h20"/>
                                </svg>
                            }
                            endValue={200000}
                            label="Indirectly Learners"
                        />
                    </div>
                    
                    <div className="impact-footer">
                        <div className="impact-footer-line"></div>
                        <span className="impact-footer-text">Academic year 2025-2026</span>
                        <div className="impact-footer-line"></div>
                    </div>
                </div>
                <div className="impact-right">
                    <img src={mapImage} alt="Our Reach Map" className="impact-map-image" />
                </div>
            </div>
        </section>
    );
};

export default Impact;
