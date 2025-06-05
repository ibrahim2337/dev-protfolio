import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 py-2 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Unique Animated Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection("about")}
            >
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg transform rotate-45 group-hover:rotate-180 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-md transform -rotate-45 group-hover:-rotate-180 transition-all duration-700">
                    <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-sm flex items-center justify-center">
                      {/* IK Text instead of dot */}
                      <span className="text-xs font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 group-hover:scale-110">
                        {"<IK/>"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Floating particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                  IbrahimKhalilullah
                </h1>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["about", "education", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
                      activeSection === item
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300  hover:text-white p-2 rounded-md transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-lg animate-in  slide-in-from-top duration-300">
          <div className="px-2 pt-2  pb-3 space-y-1">
            {["about", "education", "skills", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-center text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
