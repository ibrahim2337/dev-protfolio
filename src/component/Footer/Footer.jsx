const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 border-t border-white/10 py-8">
      {/* Floating Waves Background */}
      <div className="absolute inset-0">
        <div className="waves-container">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="wave"
              style={{
                width: `${60 + Math.random() * 80}px`,
                height: `${60 + Math.random() * 80}px`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-gray-300 transform hover:scale-105 transition-all duration-300">
            © 2024 Ibrahim Khalilullah. All rights reserved. Made with ❤️ and
            lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
