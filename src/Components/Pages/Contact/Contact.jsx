import React from "react";
import ContactForm from "../../PageComponents/ContactComponents/ContactForm";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      // key={selectedTab ? selectedTab.label : "empty"}
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
