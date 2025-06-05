/* eslint-disable react/no-unescaped-entities */
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden bg-[#0f172a]"
    >
      {/* Animated Orbs Background */}
      <div className="absolute inset-0">
        <div className="orbs-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="orb"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info Card */}
          <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-lg border rounded-lg border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">
                      ibrahimkhalilullah680@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+880 1734-454539</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Location
                    </h4>
                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ibrahim2337"
                    aria-label="Github"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ibrahim-khalilullah-363063345/"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Email"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-lg border rounded-lg border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Send Message
              </h3>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle form data here
                }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
