
"use strict"

function toFindHeaderHeigth() {

  let header = document.querySelector(".header");

  let body = document.querySelector("body");

  let html = document.querySelector("html");

  let headerStyle = window.getComputedStyle(header);

  let headerHeight = headerStyle.getPropertyValue("height");

  body.style.scrollPaddingTop = headerHeight;

  html.style.scrollPaddingTop = headerHeight;

}

window.addEventListener("resize", toFindHeaderHeigth());
window.addEventListener("DOMContentLoaded", toFindHeaderHeigth());


let anchorLinks = document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchorLink.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
    });

})







