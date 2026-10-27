import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "Jan 2025",
    link: "https://simpli-web.app.link/e/FAIJSvlUp1b",
    category: "Certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H7v2h2v-2zm10-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Java Programming Masterclass",
    organization: "Udemy",
    date: "Mar 2024",
    link: "",
    category: "Online Course",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Machine Learning Algorithms",
    organization: "Simplilearn",
    date: "Jun 2024",
    link: "https://simpli-web.app.link/e/vGqzSeUTp1b",
    category: "Online Course",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8.001 8.001 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8.001 8.001 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8.001 8.001 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8.001 8.001 0 0 1 13 19.93z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "React — The Complete Guide",
    organization: "Udemy",
    date: "Aug 2024",
    link: "",
    category: "Online Course",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47m-7.07-7.14c-.63.35-.82 1.82-.31 3.96.77-.11 1.6-.29 2.4-.36.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7m9.31 4.5c.51-2.14.32-3.61-.31-3.96-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.8.07 1.63.25 2.4.36m1.43 2.61c.29-.51.29-1.02 0-1.5l-.29-.51c.31.05.61.1.88.16-.07.28-.18.57-.29.86l-.3-.51M16.63 20c.63-.35.82-1.82.31-3.96-.77.11-1.6.29-2.4.36-.48.67-.99 1.31-1.51 1.9 1.59 1.5 2.97 2.08 3.6 1.7M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    organization: "Anna University — Academic Coursework",
    date: "Dec 2024",
    link: "",
    category: "Academic Coursework",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    ),
  },
];

const categoryColors = {
  Certification: "cert-badge--cert",
  "Online Course": "cert-badge--course",
  "Academic Coursework": "cert-badge--academic",
};

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <div className="certifications-heading">
          <p>Continuous Learning</p>
          <h2>Certifications &amp; Coursework</h2>
          <div className="certifications-heading-line"></div>

        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.id}>
              <div className="cert-icon">{cert.icon}</div>

              <div className="cert-body">
                <div className="cert-top">
                  <h3>{cert.title}</h3>
                  <span className={`cert-badge ${categoryColors[cert.category]}`}>
                    {cert.category}
                  </span>
                </div>

                <p className="cert-org">{cert.organization}</p>

                <div className="cert-footer">
                  <span className="cert-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
                    </svg>
                    {cert.date}
                  </span>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
