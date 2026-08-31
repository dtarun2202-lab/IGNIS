import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

import ignisLogo from '../../assets/logos/ignis-logo.jpg';

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const prevScrollY = React.useRef(0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as Document | HTMLElement;
            let currentScrollY = 0;
            if (target === document) {
                currentScrollY = window.scrollY;
            } else {
                currentScrollY = (target as HTMLElement).scrollTop || 0;
            }

            if (currentScrollY <= 0) {
                setIsHidden(false);
            } else if (currentScrollY > prevScrollY.current && currentScrollY > 10) {
                setIsHidden(true); // scrolling down
            } else if (currentScrollY < prevScrollY.current) {
                setIsHidden(false); // scrolling up
            }

            prevScrollY.current = currentScrollY;
        };

        // Listen on window for normal pages
        window.addEventListener('scroll', handleScroll, { capture: true, passive: true });

        // Listen on the snap container for the home page
        const snapContainer = document.querySelector('.home-snap-container');
        if (snapContainer) {
            snapContainer.addEventListener('scroll', handleScroll, { passive: true });
        }

        // Initial check
        if (snapContainer) {
            prevScrollY.current = snapContainer.scrollTop;
        } else {
            prevScrollY.current = window.scrollY;
        }

        return () => {
            window.removeEventListener('scroll', handleScroll, { capture: true });
            if (snapContainer) {
                snapContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <header className={`navbar ${isHidden ? 'hidden' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={ignisLogo} alt="IGNIS" className="navbar-logo-img" />
                </Link>

                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </div>

                <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <nav className="navbar-links">
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
                        <Link to="/for-schools" onClick={() => setIsMobileMenuOpen(false)}>FOR SCHOOLS</Link>
                        <Link to="/csr-support" onClick={() => setIsMobileMenuOpen(false)}>CSR SUPPORT</Link>
                        <Link to="/studies-reports" onClick={() => setIsMobileMenuOpen(false)}>STUDIES & REPORTS</Link>
                        <Link to="/our-team" onClick={() => setIsMobileMenuOpen(false)}>OUR TEAM</Link>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
                    </nav>

                    {/* CTA */}
                    <Link to="/partner" className="navbar-cta" onClick={() => setIsMobileMenuOpen(false)}>
                        PARTNER WITH US <span className="arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;