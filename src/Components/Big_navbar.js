import React from "react";

function Big_navbar() {
  return (
    <div>
      <div className="navbar">
        <div>
          <a className="navbar-brand hover-underline-animation " href="#home">
            Home
          </a>
          <a className="navbar-brand hover-underline-animation " href="#about">
            About
          </a>
          <a
            className="navbar-brand hover-underline-animation "
            href="#education"
          >
            Education
          </a>
          <a className="navbar-brand hover-underline-animation " href="#skills">
            Skills
          </a>
          <a
            className="navbar-brand hover-underline-animation "
            href="#projects"
          >
            Projects
          </a>
          <a
            className="navbar-brand hover-underline-animation "
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Big_navbar;
