import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/icon.svg";

export const Navbar = ({ currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 滚动：上滑/顶端显示；下滑隐藏（并收起移动端菜单）
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastScrollY || y < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navItemClass = (active) =>
    `cursor-pointer transition-opacity px-3 py-1 rounded-full ${
      active ? "opacity-100 font-semibold" : "opacity-60 hover:opacity-100"
    }`;

  const pillStyle = {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.85)",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
  };

  const scrollToProjectsSection = () => {
    // If on home page, scroll to projects section
    if (window.location.hash === "" || window.location.hash === "#home") {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page first, then scroll
      window.location.hash = 'home';
      setTimeout(() => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop 玻璃态居中胶囊 */}
      <motion.div
        className="hidden md:block fixed top-6 left-1/2 z-50"
        initial={{ y: 0, x: "-50%" }}
        animate={{ y: isVisible ? 0 : -120, x: "-50%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-8 py-2 rounded-full" style={pillStyle}>
          <div className="flex items-center gap-8">
            {/* 左侧 Logo */}
            <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={icon} alt="Logo" className="w-10 h-10" />
            </a>

            {/* 胶囊菜单 */}
            <div className="flex gap-6 items-center">
              <button
                onClick={scrollToProjectsSection}
                className={navItemClass(currentPage === "portfolio")}
              >
                <p className="tracking-[1.8px] font-semibold text-[14px] text-[#201f26]" style={{ fontFamily: "'Montserrat', sans-serif" }}>PORTFOLIO</p>
              </button>
              <a href="#about" className={navItemClass(currentPage === "about")}>
                <p className="tracking-[1.8px] font-semibold text-[14px] text-[#201f26]" style={{ fontFamily: "'Montserrat', sans-serif" }}>ABOUT</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile 顶部条 */}
      <motion.div
        className="md:hidden fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-4 mt-4 rounded-2xl" style={pillStyle}>
          <div className="h-[64px] px-5 flex items-center justify-between">
            <a href="#home" className="flex items-center">
              <img src={icon} alt="Logo" className="w-7 h-7" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 grid place-items-center"
            >
              {/* 汉堡/关闭 */}
              <div className="w-6">
                {mobileMenuOpen ? (
                  <div className="relative w-6 h-6">
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#201f26] rotate-45" />
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#201f26] -rotate-45" />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    <span className="w-6 h-[2px] bg-[#201f26]" />
                    <span className="w-6 h-[2px] bg-[#201f26]" />
                    <span className="w-6 h-[2px] bg-[#201f26]" />
                    <span className="w-6 h-[2px] bg-[#201f26]" />
                  </div>
                )}
              </div>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-gray-200/60"
              >
                <div className="px-5 py-3 flex flex-col">
                  <button
                    onClick={scrollToProjectsSection}
                    className={`py-3 w-full text-left ${currentPage === "portfolio" ? "opacity-100" : "opacity-70"} hover:opacity-100`}
                  >
                    <p className="text-[12px] tracking-[1.56px] font-semibold text-[#201f26]" style={{ fontFamily: "'Montserrat', sans-serif" }}>PORTFOLIO</p>
                  </button>
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 ${currentPage === "about" ? "opacity-100" : "opacity-70"} hover:opacity-100`}
                  >
                    <p className="text-[12px] tracking-[1.56px] font-semibold text-[#201f26]" style={{ fontFamily: "'Montserrat', sans-serif" }}>ABOUT</p>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};
