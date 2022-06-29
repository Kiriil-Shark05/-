
"use strict"

let header = document.querySelector(".header");

let scrollingElement = document.querySelector('[id^="link"]');

if (scrollingElement != null) {

    let scrollingElementId = scrollingElement.getAttribute("id");

    let closestFullscreenOrSwiper;

    if (scrollingElement.closest(".fullscreen")) {
      scrollingElement.closest(".fullscreen").setAttribute("id", `flag-${scrollingElementId}`);
      closestFullscreenOrSwiper = scrollingElement.closest(".fullscreen");
    } else if (scrollingElement.closest(".swiper-container")) {
      scrollingElement.closest(".swiper-container").setAttribute("id", `flag-${scrollingElementId}`);
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

    console.log(sumOfBlocks);


    let anchorLink = document.querySelector('a[href^="#"]');

    anchorLink.addEventListener('click', e => {
      e.preventDefault();
      scrollTo({
          top: scrollPixels,
          behavior: "smooth"
      });
    });


}
