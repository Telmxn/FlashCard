import React from 'react';
import "./aboutme.css";
import me from "../../assets/images/me.jpg";
import cv from "../../assets/pdf/Murad Jafarov CV.pdf";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={me} alt="Me" />
          </div>
          <div className="column right">
            <div className="text">
              I&apos;m Murad Jafarov and I&apos;m a
              <span> Full Stack Developer</span>
            </div>
            <p>
              I am a 19-year-old 3rd-year student at ADA University, currently
              enrolled in the Code Academy Full Stack course. Seeking
              opportunities in Web Design and Development, I specialize mainly
              in front-end development. With a strong belief in my abilities, I
              thrive as a team player in challenging environments. As a fresher
              with innovative project ideas, I am well-versed in various
              programming languages, including HTML5, Bootstrap, JavaScript, and
              I have experience with databases such as MSSQL. Additionally, I am
              familiar with ASP.NET Core for back-end development.
            </p>

            <a href={cv} download="murad_jafarov_cv.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
