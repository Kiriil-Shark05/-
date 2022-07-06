
"use strict"


// blocks positioning

window.addEventListener("load", e => {

let fullscrrenBlocks = Array.from(document.querySelectorAll(".fullscreen, .swiper-container, .swiper-container-no"));

fullscrrenBlocks.forEach(fullscrrenBlock => {

  let topValue;

  if (!fullscrrenBlocks.indexOf(fullscrrenBlock) == 0) {

    const slicedArray = fullscrrenBlocks.slice(0, fullscrrenBlocks.indexOf(fullscrrenBlock));

    console.log(slicedArray);

    let slicedBlockHeigths = [];

    slicedArray.forEach(slicedBlock => {
      const slicedBlockHeight = slicedBlock.clientHeight;
      slicedBlockHeigths.push(slicedBlockHeight);
    });

    console.log(slicedBlockHeigths);

    if (slicedBlockHeigths.length > 1) {
      const initialValue = 0;
        topValue = slicedBlockHeigths.reduce(
          (previosValue, currentValue) => previosValue + currentValue,
          initialValue
        );

    } else {
      topValue = slicedBlockHeigths[0];
    }

    console.log(topValue);

  } else {
    topValue = 0;
    console.log(topValue);
  }
  
    fullscrrenBlock.style.top = topValue + "px";

});


// preloader and animation



body.classList.add('preloader-lock');

let fullscrren2 = document.querySelector(".fullscreen02")

let preloader = document.getElementById('page-preloader');

let contains_preloader;

let fullscreen01 = document.querySelector('.fullscreen01');


setTimeout(function() {
  if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
    if (!(fullscreen01 == null)) {
      fullscreen01.classList.add('done');
    } else {
      fullscrren2.classList.add('done');
    }

    body.classList.remove('preloader-lock');

    contains_preloader = preloader.classList.contains('done');

    if (contains_preloader == true) {
      const animItems = document.querySelectorAll('._anim-items');


      if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
          for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active')
            } else {
              if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
              }

            }
          }
        }

        function offset(el) {
          const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
          animOnScroll();
        }, 300);

      }
    }

  }
}, 200);

});





