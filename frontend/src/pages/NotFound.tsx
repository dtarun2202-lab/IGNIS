import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Navbar from '../components/Navbar/Navbar';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <Navbar />
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Page Not Found</h2>
                <p className="not-found-text">
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link to="/" className="not-found-home-btn">
                    GO BACK HOME
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
