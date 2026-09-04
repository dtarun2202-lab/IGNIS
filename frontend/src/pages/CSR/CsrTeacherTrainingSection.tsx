import React from 'react';
import './CsrTeacherTrainingSection.css';
import teacherTrainingImage from '../../assets/images/Teacher Training for Participatory Learning.jpg';

const CsrTeacherTrainingSection = () => {
    return (
        <section id="teacher-training" className="csr-teacher-training-section">
            <div className="csr-research-header">
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
                <h2 className="csr-research-title">
                    <span>Teacher Training </span>
                    <span className="csr-red-text">for Participatory Learning</span>
                </h2>
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
            </div>

            <div className="csr-teacher-training-container">
                <div className="csr-teacher-training-content">
                    <p>
                        Ignis organizes specialized training programs focused on student-centered, activity-based teaching methodologies. Offered both as capacity-building initiatives for schools and through open enrollments, these programs empower educators to create highly engaging classrooms.
                    </p>
                    <p>
                        Since March 2020, we have also fully integrated comprehensive training on hybrid and online teaching methodologies, equipping teachers with the essential tools and resources for modern education.
                    </p>
                </div>

                <div className="csr-teacher-training-image-wrapper">
                    <img src={teacherTrainingImage} alt="Teacher Training for Participatory Learning" />
                </div>
            </div>
        </section>
    );
};

export default CsrTeacherTrainingSection;
