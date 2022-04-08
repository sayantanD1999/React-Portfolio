import React from "react";
import profile from "./images/Profile.jpg"

function Home() {
  return (
    <div>
      <section id="home">
        <div className="row">
          <div className="col-sm-6 column">
            <div>
              <h1>
                {" "}
                Hi, <br /> I am{" "}
                <span style={{ color: "#0f2c67" }}>Sayantan Dutta,</span>{" "}
              </h1>
              <div className="typewriter">
                <h2>A Frontend Developer</h2>
              </div>
              <h3 style={{ color: "#0f2c67" }}>Javascript . React . Node</h3>
              <a href="#contact">
                <button className="btn btn-info">Contact Me</button>
              </a>
            </div>
          </div>
          <div className="col-sm-6 column">
            <div className="img_holder">
              <img src={profile} alt="profile" id="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
