import React from "react";
import project1 from "./image/project1.png";
import project2 from "./image/project2.png";
import project3 from "./image/project3.png";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const Project = () => {
  return (
    <div className="Project">
      <motion.h1 className="headname">Project</motion.h1>
      <div className="project1 three">
        <div>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <img src={project1} className="project1 img" />
            </div>
          </Tilt>
        </div>
        <div className="project1 contain">
          <h2 className="project1 head">Todo List</h2>
          <p className="project1 details">
            In this project used tools are React, HTML, CSS. This is a todo list
            of a simple app that is developed with React code. in this project I
            have not focus on the design path but the project will function
            veryt better.
          </p>
          <a href="https://todo-list-react-pi-lilac.vercel.app/">
            <motion.button
              whileHover={{
                scale: 1.5,
              }}
              className="explore"
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
      <div className="project2 three">
        <div>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <img src={project2} className="project2 img" />
            </div>
          </Tilt>
        </div>
        <div className="project2 contain">
          <h2 className="project2 head">Music Playlist</h2>
          <p className="project2 details">
            In this project used tools are Javascript, HTML, CSS In this
            project, there are only three songs play. But it is very interative
            site like when you pause the song the web color will change and the
            song can play from between also.
          </p>
          <a href="https://music-play-list-90wrdjfmj-madhusudhan.vercel.app/">
            <motion.button
              whileHover={{
                scale: 1.5,
              }}
              className="explore"
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
      <div className="project3 three">
        <div>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <img src={project3} className="project3 img" />
            </div>
          </Tilt>
        </div>
        <div className="project3 contain">
          <h2 className="project3 head">Quiz Game</h2>
          <p className="project3 details">
            In this project used tools are Javascript, AJAX, HTML, CSS. There
            are total 10 questions are provided and at the end, it will show the
            Result. The Question is based on Computer Science. after selecting
            an answer you will get the 2sec of time to see the correct answer.
          </p>
          <a href="https://quiz-game-sass-32quuq10z-madhusudhan123-star.vercel.app/">
            <motion.button
              whileHover={{
                scale: 1.5,
              }}
              className="explore"
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
      <div className="buttondiv">
        <a href="https://github.com/madhusudhan123-star?tab=repositories">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            className="morebutton"
          >
            More Projects
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Project;
