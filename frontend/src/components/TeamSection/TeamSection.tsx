import React from 'react';
import './TeamSection.css';

const teamMembers = [
    { name: "Rennis Joseph", role: "CEO and Founder", linkedin: "rennis-joseph" },
    { name: "Immaculate Mary", role: "Co-founder", linkedin: "immaculate-mary-rennis" },
    { name: "S.Susheel Kumar", role: "Manager-Research", linkedin: "susheel-kumar-bb77645b" },
    { name: "V.Raghava", role: "Manager-HR & Operations", linkedin: "raghav-v-04a927223" },
    { name: "Khaja Younus", role: "Manager-Admin", linkedin: "khaja-younus-1b4533411" },
    { name: "Varanganti Suman", role: "Branch Manager", linkedin: "varanganti-suman-217674396" },
    { name: "Dijina Bastin KG", role: "Program Manager", linkedin: "dijina-bastin-k-g-05a1661b2" },
    { name: "Sonia Mary Pippin", role: "HRBP", linkedin: "sonia-mary-pippin-a1196746" },
    { name: "Kotha Sravani", role: "Manager-Academics", linkedin: "sravani-kotha-16b647203" },
    { name: "Madhurima Malladeb", role: "Senior Associate- Research & Training", linkedin: "madhurima-malladeb-53807b49" },
    { name: "Abhijith R", role: "English & Life skills -Trainer", linkedin: "" },
    { name: "T.Hari Prasad", role: "Sr.Business Executive", linkedin: "" },
    { name: "Sharon Jyothi", role: "", linkedin: "" },
    { name: "Rushdhamol R.S", role: "English & Life skills -Mentor", linkedin: "rushdha-rafeek-5ba19a299" },
    { name: "Anitha", role: "Office Assistant", linkedin: "" }
];

const TeamSection = () => {
    return (
        <section className="team-section home-snap-section">
            <div className="team-container">
                <div className="team-header-top">
                    <span className="team-subtitle">IGNIS PILLARS <div className="team-line"></div></span>
                </div>
                
                <div className="team-header-center">
                    <h2 className="team-title">Our Team</h2>
                    <p className="team-description">
                        A passionate group of changemakers working together<br />
                        to build a more equal and sustainable world.
                    </p>
                    <div className="team-diamond-separator">
                        <div className="diamond"></div>
                    </div>
                </div>

                <div className="team-grid-wrapper">
                    <div className="team-cards-container">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="team-card-top"></div>
                                <div className="team-card-image-wrapper">
                                    <div className="team-card-image-placeholder"></div>
                                </div>
                                <div className="team-card-bottom">
                                    <h3 className="team-card-name">{member.name}</h3>
                                    <p className="team-card-role">{member.role}</p>
                                    <div className="team-card-social">
                                        {member.linkedin && member.linkedin !== "NA" && (
                                            <a href={`https://www.linkedin.com/in/${member.linkedin}/`} target="_blank" rel="noopener noreferrer" className="social-link" style={{ textDecoration: 'none' }}>
                                                <span className="icon-in">in</span> {member.linkedin}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
