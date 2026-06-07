import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "";
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : isHome
        ? "text-gray-300 hover:text-white transition-colors"
        : "text-black-500 hover:text-blue-500 transition-colors";

  const mobileLinkClass = (isActive) =>
    `block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
      isActive
        ? "text-blue-400 bg-blue-500/10"
        : isHome
          ? "text-gray-200 hover:bg-white/5"
          : "text-black-500 hover:bg-slate-50"
    }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`header ${isHome ? "header-dark" : "header-light"}`}
    >
      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`w-10 h-10 rounded-xl items-center justify-center flex font-bold shadow-md shrink-0 ${
          isHome ? "bg-white/10 border border-white/20" : "bg-white"
        }`}
      >
        <p className="blue-gradient_text text-sm">KP</p>
      </NavLink>

      <nav className="hidden md:flex text-lg gap-7 font-medium">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Toggle menu"
        className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg ${
          isHome ? "text-white" : "text-black-500"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-current rounded"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-current rounded"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-current rounded"
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 mx-4 mt-2 p-3 rounded-2xl shadow-xl md:hidden ${
              isHome
                ? "bg-[#0d1b2a]/95 backdrop-blur-xl border border-white/10"
                : "bg-white/95 backdrop-blur-xl border border-slate-100"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => mobileLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
