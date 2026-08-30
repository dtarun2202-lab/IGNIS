import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <Hero />
                        </>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
