import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Big_navbar from "./Components/Big_navbar";
import Side_navbar from "./Components/Side_navbar";
import Top_btn from "./Components/Top_btn";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
      <Side_navbar />
      <Big_navbar />

      <div className="container">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Top_btn id="top_btn" />
      <center>
        <p>
          Designed and built by
          <span class="highlight"> Sayantan Dutta &copy; </span>{" "}
        </p>
      </center>
    </div>
  );
}

export default App;
