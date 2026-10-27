import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Aero Drum",
      category: "IoT & Computer Vision",
      subcategory: "Motion Interaction",
      description:
        "An interactive virtual drumming system that uses dual MPU6050 motion sensors connected to an Arduino Uno to detect hand movements and trigger drum sounds through a Python application.",
      technologies: ["Python", "Arduino Uno", "MPU6050", "I2C", "PySerial", "Pygame"],
      githubLink: "https://github.com/pravin4422/Aero-Drum.git",
      liveLink: "https://github.com/pravin4422/Aero-Drum/blob/master/IOT-PROJECT-DEMO-VIDEO.mp4",
    },
    {
      id: 2,
      number: "02",
      title: "Back Bone",
      category: "Full-Stack Web App",
      subcategory: "AI-Powered Agriculture",
      description:
        "A smart agriculture platform that helps farmers access crop information, track cultivation expenses, explore market prices, and receive AI-powered agricultural guidance.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Machine Learning", "RAG"],
      githubLink: "https://github.com/pravin4422/Farmers.git",
      liveLink: "https://farmers-eqwouvosz-pravin-s-projects-9942d8e3.vercel.app/",
    },
    {
      id: 3,
      number: "03",
      title: "HealthGuard AI",
      category: "AI & Machine Learning",
      subcategory: "Application",
      description:
        "An AI-powered healthcare application that uses machine learning models to assess diabetes risk and predict potential diseases from user-provided health information.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
      githubLink: "https://github.com/pravin4422/healthguard-ai.git",
      liveLink: "https://healthguard-aimofhgk7wzyl2wmvrk9pwdw.streamlit.app/",
    },
    {
      id: 4,
      number: "04",
      title: "Tutor Finder",
      category: "Full-Stack Cloud Application",
      subcategory: "Cloud-Based Platform",
      description:
        "A cloud-based academic marketplace that connects students with peer tutors through a centralized platform. Features tutor discovery, booking, real-time availability search, role-based dashboards, and automated email notifications, built with scalable AWS infrastructure.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Amazon S3", "Amazon EC2"],
      githubLink: "https://github.com/Sivashunmugam1234/tutor_finder.git",
      liveLink: "https://find-my-tutor-ypii.vercel.app/",
    },
  ];

  const openProjectLink = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      alert("This project link will be added soon.");
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p>What I Have Built</p>
          <h2>Featured Projects</h2>
          <div className="projects-heading-line"></div>
        </div>

        <p className="projects-introduction">
          A curated selection of software projects demonstrating expertise in full-stack development, cloud technologies, and AI-driven solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <div className="project-badges">
                  <span className="project-category">{project.category}</span>
                  <span className="project-subcategory">{project.subcategory}</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-technology"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <button
                  type="button"
                  className="project-link project-github-link"
                  onClick={() => openProjectLink(project.githubLink)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </button>

                <button
                  type="button"
                  className="project-link project-live-link"
                  onClick={() => openProjectLink(project.liveLink)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;