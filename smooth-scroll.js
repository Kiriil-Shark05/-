
"use strict"

let header = document.querySelector(".header");

let anchorsAndElements = {};

let scrollingElements = document.querySelectorAll('[id^="link"]');

if (scrollingElements.length > 0) {

    scrollingElements.forEach(scrollingElement => {

      const scrollingElementId = scrollingElement.getAttribute("id");

      let closestFullscreenOrSwiper;

      if (scrollingElement.closest(".fullscreen")) {
        scrollingElement.closest(".fullscreen").setAttribute("id", `closest-${scrollingElementId}`);
        closestFullscreenOrSwiper = scrollingElement.closest(".fullscreen");
      } else if (scrollingElement.closest(".swiper-container")) {
        scrollingElement.closest(".swiper-container").setAttribute("id", `closest-${scrollingElementId}`);
        closestFullscreenOrSwiper = scrollingElement.closest(".swiper-container");
      }


      let fullscreensCollection = document.querySelectorAll(".fullscreen");

      let swipersCollection = document.querySelectorAll(".swiper-container");

      let fullscreensArray = Array.from(fullscreensCollection);

      let swipersArray = Array.from(swipersCollection);

      let commonArray = fullscreensArray.concat(swipersArray);

      let slicedArray = commonArray.slice(commonArray[0], commonArray.indexOf(closestFullscreenOrSwiper));

      let heigthOfBlocks = [];

      slicedArray.forEach(block => {
        const blockHeight = block.clientHeight;
        heigthOfBlocks.push(blockHeight);
      });

      const initialValue = 0;

      const sumOfBlocks = heigthOfBlocks.reduce(
        (previosValue, currentValue) => previosValue + currentValue,
        initialValue
      );

      const scrollPixels = sumOfBlocks - header.clientHeight;

      anchorsAndElements[scrollingElement] = scrollingElement;

      console.log(anchorsAndElements);

      });
}

// я хотел создать объект для связывания scrollingElemets and anchorLinks








    let anchorLink = document.querySelector('a[href^="#"]');


      anchorLink.addEventListener('click', e => {
        e.preventDefault();
        scrollTo({
            top: scrollPixels,
            behavior: "smooth"
        });
      });


