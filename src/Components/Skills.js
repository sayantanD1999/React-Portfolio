import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiBootstrap,
  DiMysql,
  DiNodejsSmall,
} from "react-icons/di";
import {
SiNextdotjs
} from "react-icons/si";


import { FiFigma } from "react-icons/fi";

import React from "react";

function Skills() {
  return (
    <div>
      <section id="skills">
        <div>
          <div className="row">
            <center>
              <h2
                className="header"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Skills
              </h2>
            </center>
            <div className="col-md-6 column">
              <div className="box">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  {" "}
                  <DiPython />
                  Python
                </h2>

                <h2 data-aos="fade-up" data-aos-duration="2000">
                  {" "}
                  <DiMysql /> MySQL/SQL & MongoDB
                </h2>
                  <h2 data-aos="fade-up" data-aos-duration="2000">
                  <FiFigma /> Figma
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiHtml5 /> HTML/HTML5
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiCss3 /> CSS2/CSS3
                </h2>
              </div>
            </div>
            <div className="col-md-6 column">
              <div className="box">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiJavascript1 /> JavaScript
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <SiNextdotjs /> NextJs
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiReact /> React
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiNodejsSmall /> NodeJs
                </h2>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  <DiBootstrap /> Bootstrap
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
