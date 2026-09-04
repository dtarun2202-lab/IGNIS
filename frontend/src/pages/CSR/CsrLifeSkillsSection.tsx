import React from 'react';
import './CsrLifeSkillsSection.css';
import lifeSkillsImage from '../../assets/images/life skills for girls.jpg';

const CsrLifeSkillsSection = () => {
    return (
        <section id="life-skills-girls" className="csr-life-skills-section">
            <div className="csr-research-header">
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
                <h2 className="csr-research-title">
                    <span>Life Skills </span>
                    <span className="csr-red-text">for Girls</span>
                </h2>
                <div className="csr-research-decorative-line">
                    <span className="csr-research-star">✦</span>
                </div>
            </div>

            <div className="csr-life-skills-container">
                <div className="csr-life-skills-image-wrapper">
                    <img src={lifeSkillsImage} alt="Life Skills for Girls" />
                </div>
                
                <div className="csr-life-skills-content">
                    <p>
                        Girls in vulnerable communities often lack access to an emancipatory curriculum that goes beyond standard academics. While schools provide basic education, there are critical gaps in practical life skills, health awareness, financial literacy, and socio-economic empowerment.
                    </p>
                    <p>
                        To bridge this gap, Ignis Careers has developed a specialized 3-level program for girls aged 13 to 18. This initiative seamlessly integrates core life skills with vital awareness in health, career opportunities, and legal rights. By adapting our curriculum to distinct urban and rural contexts, we empower girls with the essential skills, knowledge, and confidence needed to negotiate skewed gender dynamics and take charge of their own destinies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CsrLifeSkillsSection;
