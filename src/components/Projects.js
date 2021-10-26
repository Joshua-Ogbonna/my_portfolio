import React from "react";
import "../styles/portfolio.css";

function Projects() {
  return (
    <div className="container projects">
      <h3>My Side Projects</h3>

      <div className="projects">
        <div className="card shadow-sm bg-body rounded">
          <h5>Hack Productive</h5>
          <p>
            A utility tool that helps you achieve your daily tasks, as and when
            planned. Key features now to include texting users during start and
            end of each task, keep track of finished and unfinished tasks, allow
            users to take notes, and store their notes in folders on the app.
          </p>
          <marquee behavior="" direction="">
            <span>...work in progress</span>
          </marquee>
          <div className="technologies">
            <span>React, React-Redux, AWS Amplify, GraphQL</span>
          </div>
          <div className="actions">
            <a
              href="https://github.com/Joshua-Ogbonna/productive"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hackproductive.vercel.app/"
              target="_blank"
              className="ms-5"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
