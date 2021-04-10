import React from "react";
import "../styles/portfolio.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/icons/Link";
import GithubIcon from "@material-ui/icons/GitHub";
import GmailIcon from "@material-ui/icons/Mail";

function Home() {
  return (
    <div className="home">
      <img
        src="https://pbs.twimg.com/profile_images/1347226797688188929/ecJP8dng.jpg"
        alt="Joshua Ogbonna"
      />
      <h1>Frontend Web Developer</h1>

      <p>
        Hi, it's Joshua Ogbonna, I am a frontend web developer from Nigeria.
      </p>
      <div className="social__media">
        <a href="https://twitter.com/nedujs">
          <TwitterIcon className="link__item" />
        </a>
        <a href="https://linkedin.com/devjaykes">
          <LinkedInIcon className="link__item" />
        </a>
        <a href="https://devjaykes.vercel.app">
          <Link className="link__item" />
        </a>
        <a href="https://github.com/devjaykes">
          <GithubIcon className="link__item" />
        </a>
        <a href="mailto:ogbchinedu9@gmail.com">
          <GmailIcon className="link__item" />
        </a>
      </div>
    </div>
  );
}

export default Home;
