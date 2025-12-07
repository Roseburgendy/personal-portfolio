import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import profile from "../assets/profile.jpg";

export const About = () => {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Unity", category: "Game Dev" },
    { name: "C#", category: "Programming" },
    { name: "TypeScript", category: "Programming" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Tools" },
    { name: "Lua", category: "Game Dev" },
  ];

  const expertise = [
    "UI/UX Design",
    "Web Design",
    "Game Development",
    "Frontend Development",
    "Digital Art",
    "Copywriting"
  ];

  const socialLinks = [
    { name: "Website", url: "msync.univer.se", icon: "🌐" },
    { name: "LinkedIn", url: "linkedin.com/company/msync", icon: "💼" },
    { name: "Dribbble", url: "dribbble.com/msync", icon: "🎨" },
  ];

  return (
    <div className="min-h-screen" 
    style={{ background: "linear-gradient(135deg, var(--bg) 0%, var(--brand-scale-1-light) 50%, var(--brand-scale-3-light) 100%)" }}>
      <Navbar currentPage="about" />
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>


      <section className="pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">

          {/* Bento Box Layout */}
          <div className="space-y-4">

            {/* Row 1: Profile Card (2/5) + Introduction & Get In Touch Column (3/5) */}
            <RevealOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                {/* Profile Card - 2/5 width */}
                <div className="lg:col-span-2 rounded-3xl overflow-hidden relative h-[500px] lg:h-auto">
                  {/* Profile Image - fills entire container */}
                  <img
                    src={profile}
                    alt="Wang Ye"
                    className="w-full h-full object-cover absolute inset-0"
                  />

                  {/* Glassmorphism Name Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 text-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.85)"
                    }}
                  >
                    {/* Name */}
                    <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
                      Wang Ye
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      Game Designer & Developer
                    </p>
                  </div>
                </div>

                {/* Right Column - Introduction & Get In Touch - 3/5 width */}
                <div className="lg:col-span-3 flex flex-col gap-4">

                  {/* Introduction Card */}
                  <div className="card-glass rounded-3xl p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
                      Introduction
                    </h2>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--accent-600)" }}>
                      Services for all design and IT needs
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      I prepare various kinds of design and IT needs such as UI/UX design, web design, creating a website according to your needs, hosting and cloud, custom domain, company profile in PDF format or website and also copywriting.
                    </p>
                  </div>

                  {/* Get In Touch Card */}
                  <div className="card-glass rounded-3xl p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
                      Get In Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={`https://${link.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-glass rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col items-center text-center"
                        >
                          <div className="text-4xl mb-3">{link.icon}</div>
                          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                            {link.url}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </RevealOnScroll>

            {/* Row 3: Three Column Cards - Design, Expertise, Skills */}
            <RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Design Card */}
                <div className="card-glass rounded-3xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
                    Design
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/50 rounded-xl p-3 text-sm" style={{ color: "var(--muted)" }}>
                      UI/UX Design
                    </div>
                    <div className="bg-white/50 rounded-xl p-3 text-sm" style={{ color: "var(--muted)" }}>
                      Web Design
                    </div>
                    <div className="bg-white/50 rounded-xl p-3 text-sm" style={{ color: "var(--muted)" }}>
                      Game Design
                    </div>
                  </div>
                </div>

                {/* Expertise Card */}
                <div className="card-glass rounded-3xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
                    Expertise
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                    {expertise.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2" style={{ color: "var(--accent-600)" }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Card */}
                <div className="card-glass rounded-3xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="tag text-xs"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Row 4: Education & Experience */}
            <RevealOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Education Card */}
                <div className="card-glass rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🎓</span>
                    <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: "var(--text)" }}>
                        Digital Media Technology
                      </h4>
                      <p style={{ color: "var(--muted)" }}>Xiamen University Malaysia</p>
                      <p className="text-sm mt-1" style={{ color: "var(--accent-600)" }}>
                        Year 3 • Expected 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Currently Working On */}
                <div className="card-glass-gradient rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                    Currently
                  </h3>
                  <div className="space-y-3 text-sm" style={{ color: "var(--text)" }}>
                    <p className="flex items-center gap-2">
                      <span>✨</span>
                      <span>Learning new technologies</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🎮</span>
                      <span>Developing game projects</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>💻</span>
                      <span>Building web applications</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📚</span>
                      <span>Studying at university</span>
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
