import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div>
          <center>
            {" "}
            <h1 class="header">Get In Touch</h1>
          </center>

          <div class="row">
            <div class="col-md-6 column">
              <div>
                <h2>
                  My inbox is always open. Whether you have a question or just
                  want to say hello, I'll try my best to get back to you! Feel
                  free to mail me about any relevant job updates.
                </h2>
              </div>
            </div>
            <div class="col-md-6 column">
              <div>
                <div id="mail_com">
                  <h2>
                    {" "}
                    <MdEmail /> sayantanduttasd1999@gmail.com{" "}
                  </h2>
                </div>
                <div>
                  <h2>
                    <BsLinkedin />  <a
                      id="links"
                      href="https://www.linkedin.com/in/sayantan-dutta-b999791a0/"
                    >
                      linkedin account
                    </a>
                     
                  </h2>
                </div>
                <div>
                  <h2>
                    <BsGithub />  <a id="links" href="https://github.com/sayantanD1999">
                      Gihub Profile Link
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
