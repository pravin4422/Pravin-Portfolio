import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C"],
    },
    {
      id: 2,
      title: "Frontend & Backend",
      skills: ["React.js", "HTML5", "CSS3", "Node.js", "Express.js", "Spring Boot"],
    },
    {
      id: 3,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      id: 4,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "SharePoint", "NetBeans 6.8", "GlassFish", "AWS (Basic)"],
    },
    {
      id: 5,
      title: "Core Concepts",
      skills: ["Object-Oriented Programming (OOP)", "Data Structures and Algorithms", "DBMS", "Computer Networks", "Operating Systems (OS)", "REST APIs"],
    },
    {
      id: 6,
      title: "AI/ML & Generative AI",
      skills: ["Machine Learning", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Hugging Face Transformers", "LoRA", "PyTorch", "Scikit-learn", "FastAPI"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p>What I Work With</p>
          <h2>Technical Skills</h2>
          <div className="skills-heading-line"></div>
        </div>

        <p className="skills-introduction">Technologies and tools I use to develop applications, solve problems, and build practical software solutions.</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article className="skill-card" key={category.id}>
              <div className="skill-card-header">
                <span className="skill-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;