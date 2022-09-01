import React from "react";
import LiveProject from "../../PageComponents/ProjectComponents/ProjectsComponents";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LiveProject />
    </motion.div>
  );
};

export default Projects;
