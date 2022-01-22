window.onload = function() {
let oneBlock = document.querySelector('.fullscreen01');
let fourBlock = document.querySelector('.fullscreen4');
let fiveBlock = document.querySelector('.container04');
let twoBlock = document.querySelector('.fullscreen2');
let leftBlock = document.querySelector('.left-block');
let rightBlock = document.querySelector('.right-block');
let body = document.getElementById('body');
let preloader = document.getElementById('page-preloader');
let fullscreen01 = document.querySelector('.fullscreen01');


let rightHeightBlock = leftBlock.clientHeight;

let fourBlockHeight = fourBlock.clientHeight;
let twoBlockHeight = twoBlock.clientHeight;
let fourBlockWidth = fourBlock.clientWidth;
let fiveBlockWidth = fiveBlock.clientWidth;
let vseHeight2 = (oneBlock.clientHeight + twoBlock.clientHeight) - twoBlock.clientHeight;
let vseHeight3 = (oneBlock.clientHeight + twoBlock.clientHeight + fourBlock.clientHeight) - fourBlock.clientHeight;
let toop2 = vseHeight2;
let toop3 = vseHeight3;
let right = (fourBlockWidth / 2) - fiveBlockWidth;
let itog2 = twoBlock.style.top = toop2 + 'px';
let itog3 = fourBlock.style.top = toop3 + 'px';

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
