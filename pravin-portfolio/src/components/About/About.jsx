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
                user-focused applications, solving complex problems, and
                exploring emerging technologies.
              </p>
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
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Major Projects</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-number">MCA</span>
                <span className="highlight-label">CEG Chennai</span>
              </div>
            </div>

            <a className="about-button" href="#contact">
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;