import React from 'react';
import './CsrEmploymentSection.css';
import employmentImage from '../../assets/images/employment enhance meant programme for youth.jpg';

const CsrEmploymentSection = () => {
    return (
        <section className="csr-employment-section">
            <div className="csr-research-header">
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
                <h2 className="csr-research-title">
                    <span>Employment Enhancement </span>
                    <span className="csr-red-text">Programme for Youth</span>
                </h2>
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
            </div>

            <div className="csr-employment-container">
                <div className="csr-employment-image-wrapper">
                    <img src={employmentImage} alt="Employment Enhancement Programme for Youth" />
                </div>
                
                <div className="csr-employment-content">
                    <p>
                        Ignis has trained over 4,000 young graduates across various universities—including NIT Surathkal and Dr. B R Ambedkar Open University—alongside professionals at leading organizations like GVK Bio and Mylan.
                    </p>
                    <p>
                        By working across a wide range of age groups and sectors, we gain a deep understanding of prevalent learning cultures and practices. This extensive experience enables us to design highly purposeful curricula in English and Professional Communication Skills that drive meaningful, long-term impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CsrEmploymentSection;
