import icon from "../assets/icon.svg";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-10 bg-[var(--bg)]  text-[var(--text)]">
      {/* Logo and Credit - Centered Vertically */}
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={icon} alt="Logo" className="w-10 h-10" />
        </div>

        {/* Credit */}
        <p className="text-xs md:text-sm text-[var(--muted)] text-center font-open-sans">
          ©2025 Designed and Developed with ❤️ by Ye Wang
        </p>
      </div>
    </footer>
  );
};
