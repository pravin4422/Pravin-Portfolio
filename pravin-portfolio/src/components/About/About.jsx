import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <p>Get To Know More</p>
          <h2>About Me</h2>
          <div className="about-heading-line"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <span className="about-number">01</span>

            <div className="about-card-body">
              <h3>Who I Am</h3>

              <p>
                A software developer passionate about building reliable,
                user-focused applications and exploring emerging technologies.
              </p>

              <div className="about-card-highlights">
                <div className="about-card-highlight-item">
                  <span className="about-card-highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"/>
                    </svg>
                  </span>
                  <span className="about-card-highlight-text">
                    <strong>Full-Stack Development</strong>
                    <span>Java, Spring Boot, React.js and SQL</span>
                  </span>
                </div>

                <div className="about-card-highlight-item">
                  <span className="about-card-highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5M16 2v4M8 2v4M3 10h18M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v1m0-7v1m3-2.5-1 .5m-4 3-1 .5m5 .5-.5-1m-4 0-.5 1m5-4.5-1-.5m-4 3-1-.5"/>
                    </svg>
                  </span>
                  <span className="about-card-highlight-text">
                    <strong>AI &amp; Generative AI</strong>
                    <span>Machine learning, LLMs and RAG</span>
                  </span>
                </div>

                <div className="about-card-highlight-item">
                  <span className="about-card-highlight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"/>
                    </svg>
                  </span>
                  <span className="about-card-highlight-text">
                    <strong>Problem Solving</strong>
                    <span>Data Structures, Algorithms and logical thinking</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-information">
            <h3>Building Software with Purpose and Curiosity</h3>

            <p>
              I am pursuing a Master of Computer Applications (MCA) at the
              College of Engineering Guindy, Anna University, Chennai. With a
              strong foundation in Java, object-oriented programming, and data
              structures and algorithms, I approach software development with
              logical thinking and a problem-solving mindset.
            </p>

            <p>
              I have hands-on experience developing full-stack applications
              using Java, Spring Boot, React.js, and SQL databases, along with
              practical exposure to SharePoint solutions and workflow automation
              using Power Automate.
            </p>

            <p>
              Beyond application development, I explore machine learning and
              generative AI, including large language models and
              Retrieval-Augmented Generation (RAG). I enjoy turning ideas into
              practical solutions and continuously improving my technical skills.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">200+</span>
                <span className="highlight-label">DSA Problems</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-number">4+</span>
                <span className="highlight-label">Major Projects</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-number">MCA</span>
                <span className="highlight-label">CEG Chennai</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;