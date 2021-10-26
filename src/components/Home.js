import React from "react";
import "../styles/portfolio.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import GithubIcon from "@material-ui/icons/GitHub";
import GmailIcon from "@material-ui/icons/Mail";

import Profile from "../images/profile.jpeg";

function Home() {
  return (
    <div className="bg-dark">
      <div className="home bg-dark">
        <img src={Profile} alt="Joshua Ogbonna" />
        <h1>Joshua Ogbonna</h1>

        <p>
          Hi! I'm Joshua Ogbonna, A Web Developer (HTML, CSS, JavaScript =
          [React, Vuejs, Nodejs]). Currently building product at{" "}
          <a href="https://www.losintech.com" target="_blank" rel="noopener noreferrer">Losintech</a> - bringing solutions
          with code.
        </p>
        <div className="social__media">
          <a href="https://twitter.com/nedujs" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="link__item" />
          </a>
          <a href="https://linkedin.com/in/devjayke" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="link__item" />
          </a>

          <a href="https://github.com/devjaykes" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="link__item" />
          </a>
          <a href="mailto:ogbchinedu9@gmail.com" target="_blank" rel="noopener noreferrer">
            <GmailIcon className="link__item" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
