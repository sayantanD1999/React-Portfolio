import React from "react";

function Side_navbar() {



  function openNav() {
    document.getElementsByClassName("overlay")[0].style.width = "100%";
    // document.getElementById("myBtn").style.display = "none";
  }
  function closeNav() {
    document.getElementsByClassName("overlay")[0].style.width = "0%";
    // document.getElementById("myBtn").style.display = "block";
  }



  document.addEventListener("mouseup", function (e) {
    var container = document.getElementsByClassName("overlay")[0];
    if (!container.contains(e.target) || container.contains(e.target)) {
      document.getElementsByClassName("overlay")[0].style.width = "0%";
      // document.getElementById("myBtn").style.display = "block";
    }
  });

  return (
    <div>
      <div className="side-menu">
        <i className="fab fa-js-square js"></i>
        <span onClick={openNav} className="menu">
          &#9776;
        </span>
      </div>

      <div className="overlay">
        <span onClick={closeNav} className="cross">
          &times;
        </span>
        <div className="overlay-content">
          <ul>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#home">
                  Home
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#about">
                  About
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#education">
                  Education
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#skills">
                  Skills
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#projects">
                  Projects
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="links" onClick={closeNav} href="#contact">
                  Contact Me
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_navbar;
