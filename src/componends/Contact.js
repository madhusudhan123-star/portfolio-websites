import React from "react";
import github from "./image/github.svg";
import linkin from "./image/linkin.svg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <h1 className="contact_head">Contact</h1>
      <div className="contact">
        <h2 className="contact_name">Name</h2>
        <input type="text" className="contact_input" />
        <h2 className="contact_email">Email</h2>
        <input type="email" className="contact_input1" />
        <br />
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          type="submit"
          className="contact_submit"
        >
          submit
        </motion.button>
        <br />
        <a href="https://github.com/madhusudhan123-star">
          <button className="github">
            <img src={github} className="github_img" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
