$(document).ready(function(){
	$('.formulaire').hide();
	$('.contact').click(function(){
	$('.formulaire').toggle('slow')	

	});
	$('.carousel-caption').hide();
	$('.carousel-caption').show(3300);
  
  $('.yo').slick({
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



});
