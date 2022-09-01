import React from "react";
import Skills from "../../PageComponents/SkillsComponents/Skill";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Skills />
    </motion.div>
  );
};

export default Skill;
