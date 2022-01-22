window.onload = function() {
  let twoBlock = document.querySelector('.fullscreen02');
  let fourBlock = document.querySelector('.fullscreen4');
  let fiveBlock = document.querySelector('.container04');
  let body = document.getElementById('body');
  let preloader = document.getElementById('page-preloader');

  let twoBlockHeight = twoBlock.clientHeight;
  let fourBlockHeight = fourBlock.clientHeight;
  let fourBlockWidth = fourBlock.clientWidth;
  let fiveBlockWidth = fiveBlock.clientWidth;
  let vseHeight = (twoBlock.clientHeight + fourBlock.clientHeight) - fourBlock.clientHeight;
  let right = (fourBlockWidth / 2) - fiveBlockWidth;
  let itog4 = fourBlock.style.top = vseHeight + 'px';


  console.log(itog4);

  body.classList.add('preloader-lock');

  let contains_preloader;


  setTimeout(function() {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
      itog5 = twoBlock.style.top = 0;
      twoBlock.classList.add('done');

      contains_preloader = preloader.classList.contains('done');
      body.classList.remove('preloader-lock');

    }
  }, 200);



  };
