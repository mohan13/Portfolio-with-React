import React from "react";
import AboutMe from "../../PageComponents/AboutComponents/AboutMe";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <AboutMe />
    </motion.div>
  );
};

export default About;
