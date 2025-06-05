import { Code, Database, Globe, Palette, Smartphone } from "lucide-react";

const skills = [
  { name: "React", level: 95, icon: <Code className="w-6 h-6" /> },
  { name: "Next.js", level: 90, icon: <Globe className="w-6 h-6" /> },
  { name: "JavaScript", level: 88, icon: <Code className="w-6 h-6" /> },
  { name: "Node.js", level: 85, icon: <Database className="w-6 h-6" /> },
  { name: "UI/UX Design", level: 80, icon: <Palette className="w-6 h-6" /> },
  { name: "Mobile Dev", level: 75, icon: <Smartphone className="w-6 h-6" /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden bg-[#0f172a]"
    >
      {/* SVG gradient definition */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient
            id="skillGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="animated-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card group">
              <div className="skill-card-inner">
                <div className="skill-card-front">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-level-indicator">
                    <div className="skill-level-dots">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`skill-dot ${
                            i < Math.floor(skill.level / 20)
                              ? "skill-dot-active"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-card-back">
                  <div className="skill-details">
                    <h4 className="skill-experience">Experience</h4>
                    <p className="skill-years">
                      {Math.floor(skill.level / 20)} Years
                    </p>
                    <div className="skill-meter">
                      <svg viewBox="0 0 100 100" className="skill-circle">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          className="skill-circle-bg"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          className="skill-circle-progress"
                          style={{
                            strokeDashoffset: `${(100 - skill.level) * 2.83}`,
                          }}
                        />
                      </svg>
                      <div className="skill-circle-text">{skill.level}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
