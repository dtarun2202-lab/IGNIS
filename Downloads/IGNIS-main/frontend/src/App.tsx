import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NotFound from './pages/NotFound';
import Impact from './components/Impact/Impact';
import SdgSection from './components/SdgSection/SdgSection';
import TeamSection from './components/TeamSection/TeamSection';
import Footer from './components/Footer/Footer';

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
                            <TeamSection />
                            <Footer />
                        </div>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
