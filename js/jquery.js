$(document).ready(function(){
	$('.formulaire').hide();
	$('.contact').click(function(){
	$('.formulaire').toggle('slow')	

	});
	$('.carousel-caption').hide()
	$('.carousel-caption').show(3300)

$('.slider').on(function(){
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
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
});