$(function(){

$('.scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#podhip').offset().top }, 1500);
  e.preventDefault();
});

})
