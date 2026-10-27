import "./Experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      type: "Internship",
      role: "Java Software Developer Intern",
      company: "Hinduja Tech Limited",
      location: "Perungalathur, Chennai, Tamil Nadu",
      from: "June 2026",
      to: "October 2026",
      responsibilities: [
        "Developed a full-stack College Portal using Java, Spring Boot, React.js, and MySQL, implementing course management, attendance tracking, results, and notice management.",
        "Built Internal IT Workspace and Legal Document Approval solutions using SharePoint and Power Automate, automating email notifications and message updates to streamline internal collaboration and document approval workflows.",
        "Contributed to a Timesheet Management page for a company project.",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "JavaScript", "MySQL", "REST APIs", "SharePoint", "Power Automate", "NetBeans IDE 6.8", "GlassFish"],
    },
    {
      id: 2,
      type: "Internship",
      role: "Game Developer Intern",
      company: "Foxzoid Game Studio",
      location: "Remote, Chennai, Tamil Nadu, India",
      from: "Feb 2026",
      to: "Jun 2026",
      responsibilities: [
        "Developed four browser-based game projects using HTML5, CSS3, and JavaScript, implementing interactive gameplay mechanics, event handling, game logic, and responsive user interfaces to enhance player experience across different screen sizes.",
        "Conducted gameplay testing, debugging, and interface optimization to improve game stability and usability; managed version control using Git and GitHub and independently deployed projects to the live website, resolving production issues and incorporating feedback to refine game functionality.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p>My Professional Journey</p>
          <h2>Work Experience</h2>
          <div className="experience-heading-line"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-marker">
                <span></span>
              </div>

              <article className="exp-card">
                <div className="exp-card-top">
                  <div className="exp-meta">
                    <div className="exp-meta-header">
                      <h3>{exp.role}</h3>
                      <div className="exp-date">
                        <span>{exp.from}</span>
                        <span className="exp-date-sep">—</span>
                        <span>{exp.to}</span>
                      </div>
                    </div>
                    <h4>{exp.company}</h4>
                    <div className="exp-location-row">
                      <p className="exp-location">{exp.location}</p>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-divider"></div>

                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>
                      <span className="exp-dot"></span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-list">
                  {exp.technologies.map((tech) => (
                    <span className="exp-tech" key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
