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
                    
                    <div className="other-reports-grid">

                        <div className="report-card standard-report">
                            <div className="report-header">
                                <span className="report-date">February 2018</span>
                            </div>
                            <h3 className="report-title-small">HT PAREKH FOUNDATION</h3>
                            <p className="report-summary-small">
                                An in-depth Lean Data impact measurement study on the changes observed in children post-Ignis's intervention.
                            </p>
                            <ul className="takeaways-list small-list">
                                <li><strong>90%</strong> of parents felt Ignis's intervention is "Very Important"</li>
                                <li><strong>38%</strong> observed significant improvement in English</li>
                                <li><strong>99%</strong> showed interest in after-school classes</li>
                            </ul>
                            <button className="btn-download-outline">Download PDF &darr;</button>
                        </div>
                        
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
