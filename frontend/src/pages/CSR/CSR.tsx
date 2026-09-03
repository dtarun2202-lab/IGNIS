import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CSR.css';

const CSR = () => {
    return (
        <div className="csr-page">
            <Navbar />
            <section className="csr-hero">
                <div className="csr-hero-container">
                    <h1 className="csr-hero-title">CSR Support</h1>
                    <p className="csr-hero-description">
                        Empowering communities through impactful programs.
                    </p>
                </div>
            </section>
            
            <div className="csr-content">
                {/* Content goes here */}
            </div>
            
            <Footer />
        </div>
    );
};

export default CSR;
