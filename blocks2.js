window.onload = function() {
  let oneBlock = document.querySelector('.fullscreen01');
  let twoBlock = document.querySelector('.fullscreen02');
  let fourBlock = document.querySelector('.fullscreen4');
  let fiveBlock = document.querySelector('.container04');
  let body = document.getElementById('body');
  let preloader = document.getElementById('page-preloader');
  let fullscreen01 = document.querySelector('.fullscreen01');

  let twoBlockHeight = twoBlock.clientHeight;
  let fourBlockHeight = fourBlock.clientHeight;
  let fourBlockWidth = fourBlock.clientWidth;
  let fiveBlockWidth = fiveBlock.clientWidth;
  let vseHeight = (oneBlock.clientHeight + twoBlock.clientHeight) - twoBlock.clientHeight;
  let vseHeight3 = (oneBlock.clientHeight + twoBlock.clientHeight + fourBlock.clientHeight) - fourBlock.clientHeight;
  let toop = vseHeight;
  let toop3 = vseHeight3;
  let right = (fourBlockWidth / 2) - fiveBlockWidth;
  let itog3 = fourBlock.style.top = toop3 + 'px';
  let itog4 = twoBlock.style.top = toop + 'px';


  console.log(itog3);

  body.classList.add('preloader-lock');

  let contains_preloader;


  setTimeout(function() {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
      itog5 = oneBlock.style.top = 0;
      fullscreen01.classList.add('done');

      contains_preloader = preloader.classList.contains('done');
      body.classList.remove('preloader-lock');
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

  };
