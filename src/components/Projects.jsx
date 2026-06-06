export default function Projects() {
  const projects = [
    {
      title: "Mood Travel Selector",
      image: "/mood-travel-decider.png",
      description:
        "A responsive travel recommendation application that suggests destinations based on the user's mood and preferences.",
      tech: ["HTML", "CSS", "JavaScript", "UI Design"],
      github: "https://github.com/Manu1067/Mood-Travel-Selector",
      demo: "https://mood-travel-selector.vercel.app/",
    },

    {
      title: "Learning Path Generator",
      image: "/learning-path.png",
      description:
        "An interactive React application that generates personalized learning roadmaps for Frontend, Backend, AI, and Cybersecurity careers.",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      github: "https://github.com/Manu1067/learning-path",
      demo: "https://learning-path-generator-eight.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-badges">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}