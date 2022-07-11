import React from "react";
import {
    FaSchool,
    FaUniversity
  } from "react-icons/fa";

function Education() {
  return (
    <div>
      <section id="education">
        <div>
          <center>
            <h1 data-aos="fade-up" data-aos-duration="2000" className="header">
              Education
            </h1>
          </center>
          <div className="row column">
            <div className="col-md-4">
              <div>
                <div className="edu">
                  <h2 data-aos="fade-up" data-aos-duration="2000">
                    {" "}
                    Matriculation
                  </h2>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                   Orient Day School
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    ICSE
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    83.66%
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    2016
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="edu">
                  <h2 data-aos="fade-up" data-aos-duration="2000">
                    {" "}
                    Higher Secondary
                  </h2>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                 K.V Garden Reach
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    CBSE
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    70.6%
                  </h3>

                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    2018
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4" id="lastedu">
              <div>
                <div className="edu">
                  <h2 data-aos="fade-up" data-aos-duration="2000">
                    Under Graduation
                  </h2>
                  <h3 data-aos="fade-up" data-aos-duration="2000">
                  FIEM
                  </h3>
                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    MAKAUT
                  </h3>
                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    8.75,80%
                  </h3>{" "}
                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    2022
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
