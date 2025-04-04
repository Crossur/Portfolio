import React from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiReactrouter, SiRedux, SiExpress, SiGit, SiJest, SiNodedotjs, SiTerraform, SiMongodb, SiPostgresql, SiGooglecloud, SiKubernetes, SiDocker } from "react-icons/si";
import { FaUser } from "react-icons/fa";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "React Router", icon: <SiReactrouter className="text-gray-900 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764abc] text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Git", icon: <SiGit className="text-red-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Jest", icon: <SiJest className="text-pink-600 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Terraform", icon: <SiTerraform className="text-purple-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ed] text-4xl sm:text-5xl md:text-6xl drop-shadow-lg" /> },
];

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center text-white px-8 py-24 min-h-screen justify-center overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center md:items-center text-center w-full md:w-1/2 space-y-8"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaUser className="text-amber-300 text-5xl md:text-9xl drop-shadow-lg mb-4" />
        <p className="text-lg md:text-3xl max-w-2xl text-gray-200 leading-relaxed font-light">
          I am a web developer with a deep passion for coding. I love the rush of solving tough challenges and constantly learning something new.
          I mainly work with JavaScript and TypeScript, but I'm always ready to explore new technologies.
          <br /><br />
          Outside of coding, I find that same excitement in conquering challenging games, watching anime, reading manga, or spending time with friends and family.
          It's that same drive to overcome obstacles and grow that keeps me motivated both in tech and in life.
        </p>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-0 md:w-1/2 grid grid-cols-3 gap-10 max-w-lg justify-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center space-y-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
            }}
          >
            {tech.icon}
            <span className="text-white text-sm md:text-xl font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
