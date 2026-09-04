import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CSR.css';

const programs = [
    {
        title: "Rural Teacher\nFellows Programme",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        )
    },
    {
        title: "Research and\nCapacity Building",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
        )
    },
    {
        title: "Life Skills\nfor Girls",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
        )
    },
    {
        title: "Employment Enhancement\nProgramme for Youth",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        )
    },
    {
        title: "Teacher Training for\nParticipatory Learning",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
        )
    }
];

const CSR = () => {
    return (
        <div className="csr-page">
            <Navbar />
            <section className="csr-hero">
                <div className="csr-hero-left">
                    <div className="csr-subtitle-wrapper">
                        <span className="csr-subtitle">CSR SUPPORT</span>
                        <div className="csr-subtitle-line"></div>
                    </div>
                    <h1 className="csr-main-title">
                        Creating Opportunities.<br/>
                        Building Stronger<br/>
                        <span className="csr-red-text">Communities.</span>
                    </h1>
                    <p className="csr-description">
                        Through collaborative partnerships, we empower<br/>
                        educators, equip young learners and strengthen<br/>
                        communities for a better tomorrow.
                    </p>
                </div>
            </section>
            
            <section className="csr-programs-section">
                <div className="csr-programs-grid">
                    {programs.map((program, index) => (
                        <div className="csr-program-card" key={index}>
                            <div className="csr-program-icon-wrapper">
                                {program.icon}
                            </div>
                            <h3 className="csr-program-title">
                                {program.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < program.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h3>
                        </div>
                    ))}
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
