import "./Home.css";
import profilePhoto from "../../assets/profile-photo.jpeg";
function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">Hi, I'm</p>

          <h1 className="home-name">
            Pravin <span>R</span>
          </h1>

          <h2 className="home-role">Software Developer</h2>

          <p className="home-description">I design and build scalable, user-focused web applications using Java, Spring Boot, React, and Python, with a growing focus on applied AI/ML.</p>

          <div className="home-buttons">
              <a
                href="/Pravin_Deloit.pdf"
                className="primary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

            <a href="#contact" className="secondary-button">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="home-visual" aria-hidden="true">
          <div className="profile-card">
                      <div className="profile-circle">
            <img
              src={profilePhoto}
              alt="Pravin R"
              className="profile-photo"
            />
          </div>

            <div className="code-line">
              <span className="code-keyword">const</span>
              <span className="code-name"> developer</span> = {"{"}
            </div>

            <div className="code-detail">
              name: <span>"Pravin R"</span>,
            </div>

            <div className="code-detail">
              stack: <span>["Java", "React", "Python"]</span>,
            </div>

            <div className="code-detail">
              focus: <span>"AI/ML"</span>
            </div>

            <div className="code-line">{"};"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;