$(document).ready(function(){
  $('.formulaire').hide();
  $('.contact').click(function(){
  $('.formulaire').toggle('slow') 
});
  

    $('li:nth-child(1)').mouseenter(function(){
    $('.trait_anime').animate({width: '+=160px' },1000)});
    $('li:nth-child(1)').mouseout(function(){
    $('.trait_anime').animate({width: '-=160px' },1000)});

    $('li:nth-child(2)').mouseenter(function(){
    $('.trait_anime2').animate({width: '+=140px' },1000)});
      $('li:nth-child(2)').mouseout(function(){
    $('.trait_anime2').animate({width: '-=140px' },1000)});

    $('li:nth-child(3)').mouseenter(function(){
    $('.trait_anime3').animate({width: '+=120px' },1000)});
    $('li:nth-child(3)').mouseout(function(){
    $('.trait_anime3').animate({width: '-=120px' },1000)});

  })

  
$('.yo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite:true,
  autoplay: true,
  autoplaySpeed: 3000,
  dots:true,
  arrows: true,
  centerMode: true,
 centerPadding: '250px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
  });

