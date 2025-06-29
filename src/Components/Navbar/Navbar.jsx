import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact-me" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-0">
        {/* Logo */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("#home")}
          className="navbar-start text-xl sm:text-2xl font-bold cursor-pointer font-special text-white"
        >
          AHD<span className="text-accent">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {navItems.map((item) => (
              <motion.li key={item.name} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
            <motion.li whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/106px2xZ1aJ7XU0MkXoFvfQPCbBbZNNMD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm xl:btn-md bg-white text-black border-none hover:bg-accent transition-colors duration-200 font-medium px-8 py-3"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-accent btn btn-ghost btn-circle"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-200 py-6 shadow-lg rounded-b-lg mx-4 mt-1"
          >
            <ul className="menu bg-white w-full rounded-box space-y-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left text-black hover:bg-accent hover:text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://drive.google.com/file/d/106px2xZ1aJ7XU0MkXoFvfQPCbBbZNNMD/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn w-11/12 mx-auto bg-black text-white hover:bg-accent transition-colors duration-200 rounded-full font-medium mt-5"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
