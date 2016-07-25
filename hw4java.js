$( document ).ready(function() {
  // Good job using document.ready!

  $('.readmore').click(function() {
    // The reason your page has that jump when you click on a link is because the default action for a link is to reload the page. To prevent this from happening, just add event.preventDefault() at the end of the function and it will prevent the "default action"
  	$('#show-this-on-click').slideDown(500);

    // You shouldn't have commas in your javascript; use semicolons!
  	$('.readmore').hide(500);
    $('.readless').show(500);

    event.preventDefault();
  });

  $('.readless').click(function() {
    $('#show-this-on-click').slideUp(500);
  	$('.readmore').show(500);
  	$('.readless').hide(500);

    // Great job using all 3 of the jQuery methods we went over!

    event.preventDefault();
  });

  $('.learnmore').click(function() {
  	$('#show-this-on-click').slideDown(500);
    $('.learnmore').hide(500);
  	$('.hide').show(500);

    event.preventDefault();
  });

  // Next time, maybe try using a named callback function instead of the anonymous functions just to see which you prefer! I personally like using named callback functions, because it allows me to reuse them and it's easier to test. Either way, fantastic job!

 });
