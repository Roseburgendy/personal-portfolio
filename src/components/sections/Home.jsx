import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/profile.jpg";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
export const Home = () => {
  return (
    <section id="home" className="section-home">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          {/* 左侧：大标题 + 副标题 + 按钮 */}
          <div className="text-left space-y-6">
            {/* 花朵/装饰 <div className="flex gap-2 mb-4">
              <span className="w-8 h-8 bg-yellow-300 rounded-full shadow" />
              <span className="w-10 h-10 bg-pink-400 rounded-full shadow" />
              <span className="w-10 h-10 bg-blue-500 rounded-full shadow" />
            </div>*/}
            

            {/* 大标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I’m Wang Ye!
            </h1>

            {/* 副标题 */}
            <p className="muted text-lg max-w-md">
              Final Year student interested in Game Design and User Experience Design
            </p>

            {/* 按钮组 */}
            <div className="flex gap-8">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
            {/* 社交图标 */}
            <div className="flex items-center justify-center gap-4">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <FaInstagram size={22} />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <FaLinkedinIn size={22} />
                        </a>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <FaYoutube size={22} />
                        </a>
            </div>
            </div>
          </div>

          {/* 右侧：个人介绍卡片 */}
          <div className="bg-white  rounded-xl p-6 shadow flex gap-4 items-center">
            <img
              src={profile}
              className="w-70 h-70 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Hey, guess who? 👩‍💻</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I’m <span className="font-semibold">Wang Ye</span>, a multi-disciplinary passionate learner with a focus on 
                <span className="font-semibold"> game
              design and programming</span>.  I love blending{" "}
                <strong>design</strong> and <strong>technology</strong> to
                deliver experiences that brings warmth and joy.
              </p>
              <a href="#about" className="btn btn-secondary mt-6 inline-block">
                More About Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
