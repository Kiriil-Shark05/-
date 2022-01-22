window.onload = function() {
let oneBlock = document.querySelector('.fullscreen');
let twoBlock = document.querySelector('.fullscreen2');
let threeBlock = document.querySelector('.swiper-container');
let fourBlock = document.querySelector('.fullscreen4');
let fiveBlock = document.querySelector('.container04');
let body = document.getElementById('body');
let preloader = document.getElementById('page-preloader');
let fullscreen01 = document.querySelector('.fullscreen01');
// let swiper_button_prev = document.querySelector('.swiper-button-prev');
// let swiper_button_next = document.querySelector('.swiper-button-next');


// swiper_button_prev.onclick = function() {
//   swiper_button_prev.classList.add('active');
// }
//
// swiper_button_next.onclick = function() {
//   swiper_button_next.classList.add('active');
// }




let twoBlockHeight = twoBlock.clientHeight;
let threeBlockHeight = threeBlock.clientHeight;
let fourBlockHeight = fourBlock.clientHeight;
let oneBlockHeight = oneBlock.clientHeight;
let fourBlockWidth = fourBlock.clientWidth;
let fiveBlockWidth = fiveBlock.clientWidth;
let vseHeight = oneBlock.clientHeight + twoBlock.clientHeight;
let vseHeight2 = (oneBlock.clientHeight + twoBlock.clientHeight + threeBlock.clientHeight) - threeBlock.clientHeight;
let vseHeight3 = (oneBlock.clientHeight + twoBlock.clientHeight + threeBlock.clientHeight + fourBlock.clientHeight) - fourBlock.clientHeight;
let vseHeight4 = (oneBlock.clientHeight + twoBlock.clientHeight) - twoBlock.clientHeight;
let toop = vseHeight / twoBlockHeight * 100;
let toop2 = vseHeight2;
let toop3 = vseHeight3;
let toop4 = vseHeight4;
let right = (fourBlockWidth / 2) - fiveBlockWidth;
let itog2 = threeBlock.style.top = toop2 + 'px';
let itog3 = fourBlock.style.top = toop3 + 'px';
let itog4 = twoBlock.style.top = toop4 + 'px';
let itog5 = fullscreen01.style.top = 100 + '%';

console.log(itog2);


body.classList.add('preloader-lock');

let contains_preloader;


setTimeout(function() {
  if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
    itog5 = oneBlock.style.top = 0;
    fullscreen01.classList.add('done');
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




}
