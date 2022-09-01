import React from "react";
import Banner from "../../PageComponents/HomeComponents/Banner/Banner";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="text-4xl"
    >
      <Banner />
    </motion.div>
  );
};

export default Home;
