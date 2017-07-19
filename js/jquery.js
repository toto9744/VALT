$(document).ready(function(){
  $('.formulaire').hide();
	$('.contact').click(function(){
	$('.formulaire').toggle('slow')	
});
	

<<<<<<< HEAD
	});
	$('.carousel-caption').hide();
	$('.carousel-caption').show(3300);
  
  $('.yo').slick({
=======
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
>>>>>>> f90be2725b4e447ddf78cb285f2d49d09f2380fd
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite:true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  centerMode: true,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

<<<<<<< HEAD


});
=======
>>>>>>> f90be2725b4e447ddf78cb285f2d49d09f2380fd
