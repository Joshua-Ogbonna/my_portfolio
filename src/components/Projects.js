import React from "react";
import "../styles/portfolio.css";

import Bright from "../images/bright.png";
import Covid from "../images/covid.png";
import Netflix from "../images/netflix.png";
import Notes from "../images/notes.png";
import LinkHealth from "../images/linkhealth.png";
import { Button } from "@material-ui/core";

function Projects() {
  return (
    <div className="container projects">
      <h3>Amazing Projects</h3>

      <div className="row mt-5">
        <div className="col-lg-6">
          <img src={Covid} className="img-fluid" alt="Covid Tracker" />
          <div className="description">
            <h4>COVID-19 Coronavirus Tracker</h4>
            <p>
              A Covid-19 tracking application that works with the disease.sh API
              to provide live tracking of coronavirus cases around the world.
              Built with Reactjs.
            </p>
            <a href="https://github.com/Joshua-Ogbonna/covid_tracker" target="_blank">
              <Button>Github</Button>
            </a>
            <a href="https://covid-tracker-red.vercel.app/" target="_blank">
              <Button>Link</Button>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={LinkHealth} className="img-fluid" alt="Covid Tracker" />
          <div className="description">
            <h4>Link Health</h4>
            <p>
              A linkedIn for health professionals and users to promote good
              health culture through posts and connect with each other. Project
              in progress. React, Firebase, and Redux
            </p>
            <Button>Github</Button>
            <a href="https://linkedin-1f443.firebaseapp.com/" target="_blank">
              <Button>Link</Button>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Netflix} className="img-fluid" alt="Netflix Clone" />
          <div className="description">
            <h4>Netflix Clone</h4>
            <p>
              Netflix clone built with Reactjs. Data was gotten using the TMDB
              API
            </p>
            <a href="https://github.com/Joshua-Ogbonna/reactflix" target="_blank">
              <Button>Github</Button>
            </a>
            <a href="https://reactflix-blush-rho.vercel.app/" target="_blank">
              <Button>Link</Button>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Notes} className="img-fluid" alt="Notes Application" />
          <div className="description">
            <h4>Note Taking Application</h4>
            <p>
              A fullstack note taking application with authentication built with
              the MEVN stack.
            </p>
            <a href="https://github.com/Joshua-Ogbonna/iThink" target="_blank">
              <Button>Github</Button>
            </a>
            <a href="https://i-think.vercel.app" target="_blank">
              <Button>Link</Button>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Bright} className="img-fluid" alt="Brightstars Schools" />
          <div className="description">
            <h4>Bright Stars Int'l Schools</h4>
            <p>
              A fullstack school management application with full authentication
              handled with firebase. Student admission, results checking, and
              transcript applications.
            </p>
            <a href="https://github.com/Joshua-Ogbonna/Brightstars" target="_blank">
              <Button>Github</Button>
            </a>
            <a href="https://mcbrightstars.com" target="_blank">
              <Button>Link</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
