import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "API", "Charts.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website with animations",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Next.js", "Tailwind", "Framer"],
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with message encryption",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Firebase", "WebRTC"],
    github: "#",
    live: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search and save your favorite recipes",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["Vue.js", "API", "Vuex"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-800 via-cyan-900 to-blue-900"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="stars-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="compact-project-card">
              <div className="project-img-container">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link-icon">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="project-link-icon">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
