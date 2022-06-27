$(function(){

$('.scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#preim').offset().top }, 1500);
  e.preventDefault();
});

})

// function ds() {
//   window.scrollTo({
//   top: 600,
//   left: 100,
//   behavior: 'smooth'
// }, 1000);
// }




// setTimeout(() => {ds()}, 3000);