import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { AnimatePresence } from "framer-motion";

function Home() {
  return (
    <div className="frontdes ">
      <h1>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SplitText
              className="name"
              initial={{ y: "100%" }}
              animate="visible"
              variants={{
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: i * 1,
                  },
                }),
              }}
            >
              I AM Madhusudhan
            </SplitText>
            <br />
            <SplitText
              className="ocupation"
              initial={{ y: "100%" }}
              animate="visible"
              variants={{
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: i * 1,
                  },
                }),
              }}
            >
              Front-end developer
            </SplitText>
          </motion.div>
        </AnimatePresence>
      </h1>
    </div>
  );
}

export default Home;
