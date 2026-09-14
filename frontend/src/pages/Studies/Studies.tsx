import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Studies.css';

const Studies = () => {
    return (
        <div className="studies-page">
            <Navbar />
            
            <section className="studies-hero">
                <div className="studies-hero-content">
                    <span className="studies-subtitle">OUR RESEARCH</span>
                    <h1 className="studies-title">Studies & <span className="text-red">Reports</span></h1>
                    <p className="studies-description">
                        Data-driven insights and impact measurement of our programs across schools and communities.
                    </p>
                </div>
            </section>

            <section className="reports-section">
                <div className="reports-container">
                    
                    <div className="report-card featured-report">
                        <div className="report-header">
                            <span className="report-date">February 2018</span>
                            <span className="report-badge">Featured Study</span>
                        </div>
                        <h2 className="report-title">IGNIS LEAN DATA - HT PAREKH FOUNDATION</h2>
                        <p className="report-summary">
                            An in-depth impact measurement study incubated within Acumen's Lean DataSM framework to listen to parents and understand the changes observed in children post-Ignis's intervention.
                        </p>
                        
                        <div className="report-stats-grid">
                            <div className="stat-box">
                                <span className="stat-value">90%</span>
                                <span className="stat-label">Parents felt Ignis's intervention is "Very Important"</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-value">38%</span>
                                <span className="stat-label">Observed significant improvement in English</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-value">99%</span>
                                <span className="stat-label">Showed interest in after-school classes</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-value">+33</span>
                                <span className="stat-label">Net Promoter Score (NPS)</span>
                            </div>
                        </div>

                        <div className="report-key-takeaways">
                            <h3>Key Takeaways</h3>
                            <ul className="takeaways-list">
                                <li><strong>Impact on Child:</strong> Parents consistently agree that Ignis is positively changing their child's ability and willingness to talk in English. Ignis's program acts as a level-equaling field between government and private schools.</li>
                                <li><strong>Holistic Development:</strong> Beyond English, parents recognized improvements in confidence, inquisitiveness, and peer-to-peer interaction.</li>
                                <li><strong>Quality of Life:</strong> 42% of parents agreed that Ignis has "Very Much Improved" their child's quality of life.</li>
                            </ul>
                        </div>
                        
                        <div className="report-actions">
                            <button className="btn-download">Download Full PDF &darr;</button>
                        </div>
                    </div>

                    <h3 className="section-heading">More Studies & Reports</h3>
                    <div className="other-reports-grid">
                        
                        <div className="report-card standard-report">
                            <div className="report-header">
                                <span className="report-date">December 2017</span>
                            </div>
                            <h3 className="report-title-small">IGNIS LEAN DATA</h3>
                            <p className="report-summary-small">
                                An impact measurement study gathering preliminary data on value proposition and customer satisfaction, revealing an excellent Net Promoter Score of 54.
                            </p>
                            <ul className="takeaways-list small-list">
                                <li><strong>95%</strong> reported improvement in child's quality of life</li>
                                <li><strong>85%</strong> reported positive impact in personal growth (confidence, inquisitiveness)</li>
                            </ul>
                            <button className="btn-download-outline">Download PDF &darr;</button>
                        </div>

                        <div className="report-card standard-report">
                            <div className="report-header">
                                <span className="report-date">6-Year Study</span>
                            </div>
                            <h3 className="report-title-small">Intervention Study in Banapuram</h3>
                            <p className="report-summary-small">
                                A comprehensive study on the societal transformation of Banapuram village through English and life skills training over a 6-year period.
                            </p>
                            <ul className="takeaways-list small-list">
                                <li>Gender parity achieved in school enrollments</li>
                                <li>Higher education enrollment soared to <strong>89% (Girls)</strong> and <strong>93% (Boys)</strong></li>
                                <li>Average age of marriage rose significantly to 19</li>
                            </ul>
                            <button className="btn-download-outline">Download PDF &darr;</button>
                        </div>

                        <div className="report-card standard-report">
                            <div className="report-header">
                                <span className="report-date">3-Year Impact</span>
                            </div>
                            <h3 className="report-title-small">Bridge Program Impact Report</h3>
                            <p className="report-summary-small">
                                Analyzing the impact of remedial instruction in foundational English and Science across schools in Hyderabad, Mumbai, and Pune.
                            </p>
                            <ul className="takeaways-list small-list">
                                <li>Clear CEFR level shifts from A0 to <strong>A1/A1+</strong></li>
                                <li><strong>70%</strong> of students can now read and interact in English</li>
                                <li>Increased school enrollment and decreased dropouts</li>
                            </ul>
                            <button className="btn-download-outline">Download PDF &darr;</button>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Studies;
