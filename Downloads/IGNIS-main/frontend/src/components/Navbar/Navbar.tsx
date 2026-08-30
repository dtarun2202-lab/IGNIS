import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
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