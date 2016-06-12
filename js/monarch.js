$(document).ready(function () {

	$(".sorter").click(function(){
		$(this).toggleClass("down"); 
	});

});

$(window).scroll(function(){
  var sticky = $('.searchbarWrapper'),
      scroll = $(window).scrollTop();

  if (scroll >= 153) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});