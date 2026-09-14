import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NotFound from './pages/NotFound';
import Impact from './components/Impact/Impact';
import SdgSection from './components/SdgSection/SdgSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import Footer from './components/Footer/Footer';
import OurTeam from './pages/OurTeam/OurTeam';
import CSR from './pages/CSR/CSR';
import Schools from './pages/Schools/Schools';
import Contact from './pages/Contact/Contact';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Studies from './pages/Studies/Studies';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <div className="home-snap-container">
                            <Navbar />
                            <Hero />
                            <Impact />
                            <SdgSection />
                            <TestimonialSection />
                            <Footer />
                        </div>
                    } />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/csr-support" element={<CSR />} />
                    <Route path="/for-schools" element={<Schools />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/studies-reports" element={<Studies />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
