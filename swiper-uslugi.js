


const myImageSlider = new Swiper ('.swiper-container', {

  loop: true,



  speed: 800,



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },





});






let sliderBlock = document.querySelector('.swiper-container');



sliderBlock.addEventListener("mouseenter", function (e) {

  myImageSlider.params.autoplay.disableOnInteraction = false;
  myImageSlider.params.autoplay.delay = 10000;
  myImageSlider.autoplay.start();

});
sliderBlock.addEventListener("mouseleave", function (e) {
  myImageSlider.autoplay.stop();
});
