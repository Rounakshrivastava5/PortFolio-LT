import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrambledText from "../public/addons_comp/colorbends";
import TrueFocus from "../public/addons_comp/trueFocus";
import ElectricBorder from "../public/addons_comp/electricBorder";
import Antigravity from "../public/addons_comp/antigravity";
import Dock from "../public/addons_comp/dock";


const skills = [
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },

  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "Node", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },

  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/FFFFFF" },
  { name: "Postgres", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
];

const items = [
  {
    icon: <img src="/src/assets/arrowUp.png" className="w-12 h-12" />,
    label: "Up",
    onClick: () => alert("Home!"),
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/github/FFFFFF"
        className="w-5 h-5"
      />
    ),
    label: "GitHub",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <img src="/src/assets/linked6.png" className="w-5 h-5" />,
    label: "LinkedIn",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <img src="/src/assets/projects.png" className="w-6 h-6" />,
    label: "Projects",
    onClick: () => alert("Settings!"),
  },
];

const App = () => {
  // Parallax scroll effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ width: "100%", height: "1000px", position: "relative" }}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Floating Particles */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/4 left-[-120px] w-[600px] h-[600px] bg-purple-700/30 rounded-full blur-[160px]"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[20%] right-[-120px] w-[600px] h-[600px] bg-blue-700/30 rounded-full blur-[160px]"
        />

        <div className="relative z-10 pt-15">
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </div>

          <TrueFocus
            sentence="Rounak Shrivastava"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          {/* Scrambled Text Section */}
          <section className="py-0 px-0 max-w-6xl mx-auto text-center">
            <ScrambledText
              className="
    w-full max-w-4xl mx-auto text-center
    whitespace-normal
    break-words
    overflow-visible
    leading-relaxed
    [text-overflow:unset]
    [word-break:normal]
    [hyphens:none]
  "
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=":)"
            >
              Full-stack developer with 4 years of experience in Angular, React,
              and Python, building scalable UIs and high-performance distributed
              systems. I’m a frontend-leaning engineer who loves crafting
              smooth, beautiful interfaces—my heart lives in frontend, but my
              career keeps me sharp on the backend too—so I build things
              end-to-end with AWS, Redis, and Kafka.{" "}
            </ScrambledText>
          </section>

          {/* <section className="h-screen flex flex-col justify-center items-center text-center px-6">

  <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Jump to my profiles
          </motion.h2>
  <motion.p
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
    className="mt-6 max-w-xl text-xl text-gray-300"
  >
    Crafting vibrant web experiences with motion, design & performance.
  </motion.p>

  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      href="https://www.linkedin.com/in/rounakshrivastava/"
      target="_blank"
      className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
    >
      Back to LinkedIn
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      href="https://github.com/Rounakshrivastava5"
      target="_blank"
      className="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
    >
      Jump to GitHub
    </motion.a>
  </div>
</section> */}

          {/* About Section */}
          {/* <section className="py-28 px-6 max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-300 text-lg leading-relaxed"
            >
              I’m a frontend-leaning full-stack engineer who loves crafting
              smooth, beautiful user interfaces. My heart lives in frontend, but
              my career keeps me sharp on the backend too — so I build things
              end-to-end, the right way.
            </motion.p>
          </section> */}

          {/* Skills Section */}
          <section className="py-28 px-6 max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12"
            >
              Skills
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  className="w-16 h-16 flex items-center justify-center rounded-xl
                          bg-white/10 backdrop-blur-md border border-white/20
                          shadow-lg shadow-purple-500/10"
                  title={skill.name}
                >
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <section
            ref={ref}
            id="projects"
            className="py-28 px-6 max-w-7xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 40 }}
              className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12"
            >
              Projects
            </motion.h2>

            {
              /* <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 50 }}
                whileHover={{ scale: 1.04, rotateY: 6 }}
                className="bg-[#111] rounded-2xl p-6 shadow-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-5">{p.desc}</p>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white"
                  href={p.link}
                  target="_blank"
                >
                  Visit
                </motion.a>
              </motion.div>
            ))}
          </div> */

              <div className="flex justify-center">
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.06}
                  style={{ borderRadius: 1, display: "inline-block" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.04, rotateY: 6 }}
                    className="bg-[#111] rounded-2xl p-6 shadow-2xl border border-white/10 w-fit"
                  >
                    <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                      Kanbix
                    </h3>
                    <p className="text-gray-300 mb-5">
                      Kanbix is a modern, real-time Kanban board application for
                      agile teams. It features collaborative task management,
                      drag-and-drop boards, real-time updates via socket.io, and
                      a beautiful UI built with React, Tailwind CSS, and
                      Material UI.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white"
                      href="https://github.com/Rounakshrivastava5/Kanbix"
                      target="_blank"
                    >
                      Visit
                    </motion.a>
                  </motion.div>
                </ElectricBorder>

                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.05}
                  style={{ borderRadius: 1, display: "inline-block" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.04, rotateY: 6 }}
                    className="bg-[#111] rounded-2xl p-6 shadow-2xl border border-white/10 w-fit"
                  >
                    <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                      URL Shortener
                    </h3>
                    <p className="text-gray-300 mb-5">
                      A modern, full-stack URL shortening service built with
                      FastAPI (Python) backend and Angular frontend, featuring a
                      beautiful glassmorphism UI design with dark/light mode
                      support.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white"
                      href="https://github.com/Rounakshrivastava5/Url-Shortner"
                      target="_blank"
                    >
                      Visit
                    </motion.a>
                  </motion.div>
                </ElectricBorder>

                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.06}
                  style={{ borderRadius: 1, display: "inline-block" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.04, rotateY: 6 }}
                    className="bg-[#111] rounded-2xl p-6 shadow-2xl border border-white/10 w-fit"
                  >
                    <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                      Portfolio Website #1
                    </h3>
                    <p className="text-gray-300 mb-5">
                      A stunning, responsive portfolio website built with React,
                      TypeScript, and Tailwind CSS, featuring an animated Aurora
                      background and modern iOS-inspired design elements.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white"
                      href="https://github.com/Rounakshrivastava5/Portfolio-Website"
                      target="_blank"
                    >
                      Visit
                    </motion.a>
                  </motion.div>
                </ElectricBorder>
              </div>
            }
          </section>

          {/* Footer */}
          <footer className="py-2 text-center text-gray-400">
            © 2026 Rounak • Designed due to FOMO and with React, powered by
            ChatGPT ✨
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
