import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import React from 'react';

import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello,</div>
            <div className="text-2">Welcome to my PROJECT</div>
            <div className="text-3">
              And I&apos;m a <span>Full stack developer</span>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
