import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TeamSection from '../../components/TeamSection/TeamSection';

const OurTeam = () => {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <Navbar />
            <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)' }}>
                <TeamSection />
            </div>
            <Footer />
        </div>
    );
};

export default OurTeam;
