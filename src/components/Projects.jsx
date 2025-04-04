import React from "react";
import { motion } from "framer-motion";
import HarborMasterScreenshot from "../assets/images/HarborMaster.png";

const Projects = () => {
  return (
    <>
    <div id="projectDiv" className="min-h-screen flex flex-col items-center justify-center text-white px-6 pointer-events-none transform md:translate-x-[-5rem]">
      <motion.div
        key="project-motion-div"
        className="flex flex-col md:flex-row items-center gap-6"
        initial={{ y: -200 }} 
        animate={{ y: 0 }} 
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <motion.a
          href="http://35.238.113.97:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group rounded-xl overflow-hidden shadow-lg max-w-xl w-full pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 80 }}
        >
          <img
            src={HarborMasterScreenshot}
            alt="Harbor Master"
            className="w-full h-auto object-contain"
          />
        </motion.a>

        <motion.div
          className="flex flex-col gap-3 text-center md:text-left pointer-events-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <h2 className="text-4xl font-bold text-amber-400">Harbor Master</h2>
          <p className="text-white max-w-md text-lg">
            Effortlessly deploy, manage, and monitor your applications with easy-to-read insights into key metrics.
          </p>
          <a
            href="http://35.238.113.97:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:bg-amber-500 transition self-center md:self-start"
          >
            Check it out!
          </a>
        </motion.div>
      </motion.div>
    </div>
    <div id="projectDiv" className="min-h-screen flex flex-col items-center justify-center text-white px-6 pointer-events-none transform md:translate-x-[-5rem]">
    <motion.div
      key="project-motion-div"
      className="flex flex-col md:flex-row items-center gap-6"
      initial={{ y: -800 }} 
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 140 }}
    >
      <motion.a
        href="http://35.238.113.97:3000"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group rounded-xl overflow-hidden shadow-lg max-w-xl w-full pointer-events-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <img
          src={HarborMasterScreenshot}
          alt="Harbor Master"
          className="w-full h-auto object-contain"
        />
      </motion.a>

      <motion.div
        className="flex flex-col gap-3 text-center md:text-left pointer-events-auto"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <h2 className="text-4xl font-bold text-amber-400">Harbor Master</h2>
        <p className="text-white max-w-md text-lg">
          Effortlessly deploy, manage, and monitor your applications with easy-to-read insights into key metrics.
        </p>
        <a
          href="http://35.238.113.97:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:bg-amber-500 transition self-center md:self-start"
        >
          Check it out!
        </a>
      </motion.div>
    </motion.div>
  </div>
  </>
  );
};

export default Projects;
