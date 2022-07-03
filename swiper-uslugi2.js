const myImageSlider = new Swiper ('.swiper-container', {

  loop: false,



  speed: 800,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },
});

let sliderBlock = document.querySelector('.swiper-container');

if (sliderBlock) {

sliderBlock.addEventListener("mouseenter", function (e) {

  myImageSlider.params.autoplay.disableOnInteraction = false;
  myImageSlider.params.autoplay.delay = 10000;
  myImageSlider.autoplay.start();

});
sliderBlock.addEventListener("mouseleave", function (e) {
  myImageSlider.autoplay.stop();
});

}
