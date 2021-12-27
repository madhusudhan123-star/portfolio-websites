import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <motion.h3
        className="abouthead"
        initial={{ x: "-500px" }}
        animate={{ x: "800px" }}
        transition={{ type: "spring", stiffness: 10, yoyo: Infinity }}
      >
        ABOUT
      </motion.h3>
      <p className="messageabout">
        Passionate Front-End Web Developer with 1+ years experience building.
        Highly skilled in HTML, CSS, JavaScript and jQuery alongside modern
        frameworks and libraries. Interested about accessibility and usability
        of modern websites.
      </p>
      <div className="line"></div>
    </div>
  );
}

export default About;
