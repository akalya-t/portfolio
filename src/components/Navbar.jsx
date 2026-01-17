import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (location.pathname === "/" && scrollTarget) {
      const section = document.querySelector(scrollTarget);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          setScrollTarget(null);
        }, 300); // delay for page render
      }
    }
  }, [location, scrollTarget]);

  
  const handleScroll = (sectionId) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const section = document.querySelector(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      setScrollTarget(sectionId);
      navigate("/"); //  home first
    }
  };

  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-5 sticky top-0 bg-[#f9f6f1] z-50 border-b border-[#e2dcd5]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-serif text-xl hover:opacity-80 transition-opacity"
      >
        Akalya
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li>
          <Link to="/work" className="hover:underline">
            Work
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleScroll("#about")}
            className="hover:underline"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("#contact")}
            className="hover:underline"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#3c2f2f]"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-[#f9f6f1] border-t border-[#e2dcd5] flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            <Link
              to="/work"
              className="text-sm hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <button
              onClick={() => handleScroll("#about")}
              className="text-sm hover:underline"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="text-sm hover:underline"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
