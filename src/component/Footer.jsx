import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = ({ dark = false }) => {
  return (
    <footer className={`footer font-poppins ${dark ? "footer-dark" : ""}`}>
      <hr className={dark ? "border-white/10" : "border-slate-200"} />

      <div className="footer-container">
        <p className={dark ? "text-gray-400" : ""}>
          © 2026 <strong className={dark ? "text-white" : ""}>Pham Ngoc Dang Khoa</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target={link.link.startsWith("http") ? "_blank" : undefined}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`w-6 h-6 object-contain ${dark ? "brightness-0 invert" : ""}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
