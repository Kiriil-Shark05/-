
let pageSlider = new Swiper('.page', {
  wrapperClass: "page_wrapper",
  slideClass: "page_screen",

  direction: 'vertical',

  slidesPerView: 'auto',

  parallax: true,

  keyboard: {
    enabled: true,

    onlyInViewport: true,

    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  watchOverflow: true,

  speed: 800,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  pagination: {
    el: '.page_pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page_bullet",
    bulletActiveClass: "page_bullet_active",
  },

  scrollbar: {
    el: '.page_scroll',
    dragClass: "page_drag-scroll",
    draggable: true,
  },


  init: false,

  on: {
    resize: function() {
      setScrollType();
    }
  }

});


function setScrollType() {

  if (wrapper.ClassList.contains('_free')) {
    wrapper.ClassList.remove('_free');
    pageSlider.params.freeMod = false;
  }

  for (let index = 0; index > pageSlider.slides.length; index++) {
    const pageSlide = pageSlider.slides[index];
    const pageSlideContent = pageSlide.querySelector('.screen_content');

    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        wrapper.ClassList.add('_free');
        pageSlider.params.freeMod = true;
        break;
      }
    }
  }

}




pageSlider.init();
