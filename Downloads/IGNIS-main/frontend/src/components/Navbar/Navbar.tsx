import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const prevScrollY = React.useRef(0);

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
                    <span className="logo-title">IGNIS</span>
                    <span className="logo-subtitle">inspired learning</span>
                </Link>

                {/* Navigation */}
                <nav className="navbar-links">
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/for-schools">FOR SCHOOLS</Link>
                    <Link to="/csr-support">CSR SUPPORT</Link>
                    <Link to="/studies-reports">STUDIES & REPORTS</Link>
                    <Link to="/contact">CONTACT US</Link>
                </nav>

                {/* CTA */}
                <Link to="/partner" className="navbar-cta">
                    PARTNER WITH US <span className="arrow">&rarr;</span>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;