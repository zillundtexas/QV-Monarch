$(document).ready(function () {

    $(".sorter").click(function(){
        $(this).toggleClass("down"); 
    });

    $(".resultsRow").click(function(evt) {
        if ($(evt.target).closest('.closer').length == 0) {
            $(this).addClass("openProp mdl-shadow--2dp");
        }
    });
    
    $(".closer").click(function(evt){
       $(evt.target).closest('.resultsRow').removeClass("openProp mdl-shadow--2dp"); 
   });
   
	$(".extrasWrapper").click(function(){
		$(".extras").slideToggle();
		$("i").toggleClass("down"); 
	});
	
});

$(window).scroll(function(){
  var sticky = $('.searchbarWrapper'),
      scroll = $(window).scrollTop();

  if (scroll >= 153) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});



