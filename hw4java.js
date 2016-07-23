
$( document ).ready(function() {
  $('.readmore').click(function () {
  	$('#show-this-on-click').slideDown(500),
  	$('.readmore').hide(500),
 	$('.readless').show(500)
  });
  $('.readless').click(function () {
 	 $('#show-this-on-click').slideUp(500),
  	$('.readmore').show(500),
  	$('.readless').hide(500)
  });
  $('.learnmore').click(function () {
  	$('#show-this-on-click').slideDown(500),
 	 $('.learnmore').hide(500),
  	$('.hide').show(500)
  });
 });