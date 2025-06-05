// import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Code,
  ExternalLink,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    year: "2020-2024",
    duration: "4 Years",
    status: "Completed",
    gpa: "3.85/4.00",
    description: "Specialized in Software Engineering and Web Development",
    highlights: [
      "Dean's List for 6 consecutive semesters",
      "Led final year project on AI-powered web applications",
      "Active member of Programming Club",
      "Completed 15+ technical projects",
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Database Design",
      "Software Engineering",
      "AI/ML",
    ],
    projects: 15,
    achievements: 8,
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-900/20 to-purple-900/20",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: 2,
    degree: "Full Stack Web Development",
    institution: "Coding Bootcamp",
    year: "2023",
    duration: "6 Months",
    status: "Certified",
    gpa: "95%",
    description: "Intensive program covering modern web technologies",
    highlights: [
      "Top 5% of the cohort",
      "Built 10+ real-world applications",
      "Mentored junior developers",
      "Completed capstone project with industry partner",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
    projects: 12,
    achievements: 5,
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-900/20 to-teal-900/20",
    icon: <Code className="w-6 h-6" />,
  },
];

export default function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="education"
      className="min-h-screen py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
    >
      {/* Enhanced Animated Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>

          {/* Additional floating elements */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-bounce">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My academic path and continuous learning adventures
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                4+
              </div>
              <div className="text-sm text-gray-400">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                27+
              </div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                13+
              </div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
          </div>
        </div>

        {/* Interactive Education Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>

              {/* Timeline Dot */}
              <div className="absolute left-2 sm:left-6 top-12 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>

              <div
                className={`ml-8 sm:ml-16 transform transition-all duration-500 cursor-pointer ${
                  hoveredCard === edu.id ? "scale-100 shadow-2xl" : ""
                } ${
                  selectedEducation === edu.id ? "ring-2 ring-blue-400/50" : ""
                }`}
                onMouseEnter={() => setHoveredCard(edu.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  setSelectedEducation(
                    selectedEducation === edu.id ? null : edu.id
                  )
                }
              >
                <div className="border p-5 rounded-lg">
                  {/* Card Header */}
                  <div className="flex flex-col  sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          edu.color
                        } rounded-xl flex items-center justify-center transform transition-transform duration-300 ${
                          hoveredCard === edu.id ? "rotate-12 scale-105" : ""
                        }`}
                      >
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 text-base sm:text-lg mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.year}
                          </div>
                          <div className="flex items-center">
                            <Zap className="w-4 h-4 mr-1" />
                            {edu.duration}
                          </div>
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              edu.status === "Completed"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {edu.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 sm:flex-col sm:items-end">
                      <div className="text-center sm:text-right">
                        <div className="text-lg font-bold text-white">
                          {edu.gpa}
                        </div>
                        <div className="text-xs text-gray-400">Grade</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-sm font-bold text-purple-400">
                            {edu.projects}
                          </div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-cyan-400">
                            {edu.achievements}
                          </div>
                          <div className="text-xs text-gray-400">Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{edu.description}</p>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEducation(
                        selectedEducation === edu.id ? null : edu.id
                      );
                    }}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
                  >
                    <span className="text-sm font-medium">
                      {selectedEducation === edu.id
                        ? "Show Less"
                        : "Show More Details"}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        selectedEducation === edu.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {selectedEducation === edu.id && (
                    <div className="space-y-6 animate-in slide-in-from-top duration-300">
                      {/* Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-yellow-400" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-green-400" />
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.bgColor} border border-white/10 text-white hover:scale-105 transition-transform duration-200`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                        <button className="flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors duration-200">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </button>
                        <button className="flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors duration-200">
                          <Users className="w-4 h-4 mr-2" />
                          View Projects
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">
              Always Learning, Always Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
