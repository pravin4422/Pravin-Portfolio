import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Aero Drum",
      category: "Computer Vision Application",
      description:
        "A virtual drum application that allows users to play drum sounds through hand movements captured using a camera.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "Computer Vision",
      ],
      githubLink: "",
      liveLink: "",
    },
    {
      id: 2,
      number: "02",
      title: "Back Bone",
      category: "Full-Stack Web Application",
      description:
        "A web-based application developed to provide structured digital services with a responsive and user-friendly interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      githubLink: "",
      liveLink: "",
    },
    {
      id: 3,
      number: "03",
      title: "HealthGuard AI",
      category: "AI and Machine Learning",
      description:
        "An AI-based healthcare support application designed to analyse user-provided information and provide useful health-related insights.",
      technologies: [
        "Python",
        "Machine Learning",
        "React.js",
        "REST API",
      ],
      githubLink: "",
      liveLink: "",
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
          Here are some projects that demonstrate my experience in full-stack
          development, computer vision, artificial intelligence and machine
          learning.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

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
                  GitHub
                </button>

                <button
                  type="button"
                  className="project-link project-live-link"
                  onClick={() => openProjectLink(project.liveLink)}
                >
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