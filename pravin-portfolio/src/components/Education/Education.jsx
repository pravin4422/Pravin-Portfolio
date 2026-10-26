import "./Education.css";

function Education() {
  const educationDetails = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "College of Engineering Guindy",
      location: "Chennai - 600025",
      period: "2024 - 2026",
      score: "CGPA: 7.01",
    },
    {
      id: 2,
      degree: "B.Sc. Mathematics",
      institution: "Dr. M.G.R. Chockalingam Arts College",
      location: "Arni, Tiruvannamalai - 632317",
      period: "2020 - 2023",
      score: "CGPA: 8.37",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Place",
      event: "ADZAP Competition",
      organization: "Madras Christian College",
      date: "February 2024",
    },
    {
      id: 2,
      title: "Overall Champions",
      event: "Techwoods'25",
      organization: "MCA Technical Event",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Active Problem Solver",
      event: "200+ DSA Problems",
      organization: "LeetCode",
      date: "Continuous Learning",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-heading">
          <p>My Academic Journey</p>
          <h2>Education & Achievements</h2>
          <div className="education-heading-line"></div>
        </div>

        <div className="education-content">
          <div className="education-column">
            <h3 className="column-title">
              <span>01</span>
              Education
            </h3>

            <div className="education-list">
              {educationDetails.map((education) => (
                <article className="education-card" key={education.id}>
                  <div className="education-card-header">
                    <h4>{education.degree}</h4>
                    <div className="education-card-meta">
                      <span className="education-period">{education.period}</span>
                      <span className="education-score">{education.score}</span>
                    </div>
                  </div>

                  <p className="education-institution">
                    {education.institution}
                  </p>

                  <p className="education-location">
                    {education.location}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="achievements-column">
            <h3 className="column-title">
              <span>02</span>
              Achievements
            </h3>

            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <article className="achievement-card" key={achievement.id}>
                  <div className="achievement-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="achievement-information">
                    <div className="achievement-header">
                      <h4>{achievement.title}</h4>
                      <p className="achievement-date">{achievement.date}</p>
                    </div>

                    <p className="achievement-event">
                      {achievement.event}
                    </p>

                    <p className="achievement-organization">
                      {achievement.organization}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;