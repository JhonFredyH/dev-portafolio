import "./About.css";
import { aboutContent, aboutStats } from "../../data/aboutContent.js";

const About = ({ lang = "ES" }) => {
  const c = aboutContent[lang];

  return (
    <section className="about" id="about">
      <div className="about-blob"></div>
      <div className="page-section">
        <div className="about-inner">
          <div className="about-left reveal reveal--left">
            <div className="about-heading">
              <span className="section-label">{c.label}</span>
              <h2 className="about-title">{c.title}</h2>
            </div>
            <div className="about-paragraphs">
              {c.paragraphs.map((p, i) => (
                <p key={i} className="about-p">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="about-right reveal reveal--right">
            <div className="about-stats">
              {aboutStats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
