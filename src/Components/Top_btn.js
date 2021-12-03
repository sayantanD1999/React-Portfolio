import React from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function Top_btn() {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction();
      HideNavbar();
    };
  }, []);

  function scrollFunction() {
    // console.log(2);
    var mybutton = document.getElementById("myBtn");
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  var prevScroll = window.pageYOffset;
  function HideNavbar() {
    var currScroll = window.pageYOffset;
    if (prevScroll > currScroll) {
      document.getElementsByClassName("navbar")[0].style.top = "0";
      document.getElementsByClassName("navbar")[0].style.transition = "0.5s";
      document.getElementsByClassName("side-menu")[0].style.top = "0";
      document.getElementsByClassName("side-menu")[0].style.transition = "0.5s";
    } else {
      document.getElementsByClassName("navbar")[0].style.top = "-80px ";
      document.getElementsByClassName("navbar")[0].style.transition = "0.5s";
      document.getElementsByClassName("side-menu")[0].style.top = "-80px";
      document.getElementsByClassName("side-menu")[0].style.transition = "0.5s";
    }
    prevScroll = currScroll;
  };
  return (
    <div>
      <button id="myBtn" onClick={topFunction}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}

export default Top_btn;
