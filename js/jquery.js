$(document).ready(function(){
	$('.formulaire').hide();
	$('.contact').click(function(){
	$('.formulaire').toggle('slow')	

	});
    $('li:nth-child(1)').mouseenter(function(){
    $('.trait_anime').animate({width: '+=140px' },1000)});
    $('li:nth-child(2)').mouseenter(function(){
    $('.trait_anime2').animate({width: '+=120px' },1000)});
    $('li:nth-child(3)').mouseenter(function(){
    $('.trait_anime3').animate({width: '+=120px' },1000)});
  })


