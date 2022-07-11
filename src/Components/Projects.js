import React from "react";
import reactmeme from "./images/React Meme.png"
import reactinvoice from "./images/React Invoice.png"
import music from "./images/music.png"
import news from "./images/news.png"
import peaky from "./images/peaky.jpg"
import resume from "./images/resume.png"
import food from "./images/food.jpg"
import bp from "./images/budget-planner.png"
import ts from "./images/typing_speed.jpg"
import ru from "./images/ru.png"

function Projects() {
  return (
    <div>
      <section id="projects">
        <div>
          <center>
            <h1 data-aos="fade-up" data-aos-duration="2000" className="header">
              Projects
            </h1>
          </center>

          <div className="row">
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={food}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Online Food Website">
                    Online Food Website
                  </h4>
                  <p className="card-text">
                    Food and restaurant website built using HTML,CSS,JavaScript.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/Food-Stuff/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={ru}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Email Sender">
                    Recipe Upload
                  </h4>
                  <p className="card-text">
                    Developed a recipe uploader and viewer using React,Nodejs and MongoDB.
                  </p>
                  <button className="cntbtn">
                    <a href="https://gentle-stardust-9ce3cc.netlify.app/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={resume}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Custom Resume">
                    Custom Resume
                  </h4>
                  <p className="card-text">
                    Developed a Customized Resume web app using
                    <strong>Javascript</strong>, which can be downloaded in the
                    form of a pdf.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/Resume/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={bp}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Email Sender">
                    React Budget Planner
                  </h4>
                  <p className="card-text">
                    Developed a budget planner using React.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/Budget--Planner/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={news}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Official Website">
                    React News App
                  </h4>
                  <p className="card-text">
                    Developed a <strong>News Web App</strong> using React, where
                    all updated newses can be obtained categorically and can
                    also be shared.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/React-News/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={reactinvoice}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Invoice Builder">
                    React Invoice Builder
                  </h4>
                  <p className="card-text">
                    Online Invoice builder and storing datas of various
                    purchasings
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/React-Invoice/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src="forms.png"
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Customized Form">
                    Customized Form
                  </h4>
                  <p className="card-text">
                    Developed a Customized Form builder using Javascript.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/Customized-Form/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top"
                    src={reactmeme}
                    alt="Card image"
                    style={{ width: "45%" }}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Customized Form">
                    React Meme Creator Web App (Mobile)
                  </h4>
                  <p className="card-text">
                    Developed a react meme builder web app.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/React-Meme-Creator/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={ts}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Typing Speed Tester">
                    Typing Speed Tester
                  </h4>
                  <p className="card-text">
                    Developed a UI for typing speed challenge using python and
                    tKinter.
                  </p>
                  <button className="cntbtn">
                    <a href="https://github.com/sayantanD1999/Python-Typing-Speed-Tester">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={music}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Web Music App">
                    Web Music App
                  </h4>
                  <p className="card-text">
                    Web based music player built using HTML,CSS,JavaScript.
                  </p>
                  <button className="cntbtn">
                    <a href=" https://sayantand1999.github.io/MusicPlayer/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 project_holder">
              <div className="Card" data-aos="fade-up" data-aos-duration="2000">
                <div className="card_img_holder">
                  <img
                    className="Card-img-top img"
                    src={peaky}
                    alt="Card image"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title" data-text="Peaky Blinders Website">
                    Peaky Blinders Website
                  </h4>
                  <p className="card-text">
                    Developed a peaky website related to the{" "}
                    <strong>Peaky Blinders</strong> webseries using HTML,CSS &
                    jquery.
                  </p>
                  <button className="cntbtn">
                    <a href="https://sayantand1999.github.io/PeakyBlinders/">
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Projects;
