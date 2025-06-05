import { ChevronDown, Github, Linkedin, Mail, User } from "lucide-react";

export default function AboutSection({ scrollToSection }) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-20 h-20 text-purple-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
            Ibrahim Khalilullah
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
            Front End Developer
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay">
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. I specialize in modern web technologies and
            love bringing ideas to life through code.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-125"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
