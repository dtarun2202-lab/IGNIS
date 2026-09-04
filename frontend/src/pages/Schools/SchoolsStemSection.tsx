import React from 'react';
import './SchoolsStemSection.css';
import stemLabImage from '../../assets/images/STEM LAB.jpg';

const SchoolsStemSection = () => {
    return (
        <section className="stem-section">
            <div className="stem-header">
                <h2 className="stem-title">STEM Labs</h2>
                <div className="stem-divider">
                    <div className="stem-line"></div>
                    <div className="stem-diamond">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3d2a23" stroke="none"><path d="M12 2l3.09 6.91L22 12l-6.91 3.09L12 22l-3.09-6.91L2 12l6.91-3.09L12 2z"/></svg>
                    </div>
                    <div className="stem-line"></div>
                </div>
            </div>

            <div className="stem-content">
                <div className="stem-text">
                    <p>
                        An outcome of the post-COVID 19 milieu is the realisation that the future of education lies in a hybrid model that complements classroom learning with purposeful online engagements. Ignis has developed a STEM curriculum for students from class 6 to class 10 that prioritizes cognitive development over memorization.
                    </p>
                    <p>
                        The activity-based curriculum encourages students to internalize the basic concepts and to derive understanding through experiment and observation. The program encourages critical enquiry and discovery through participatory projects and also complementary AV aids.
                    </p>
                </div>
                <div className="stem-image-wrapper">
                    <img src={stemLabImage} alt="STEM Lab Students" className="stem-image" />
                </div>
            </div>
        </section>
    );
};

export default SchoolsStemSection;
