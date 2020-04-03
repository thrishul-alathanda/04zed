// Preloader
  $(window).on('load', function() {
    $('#preloader').delay(3000).fadeOut('slow',function(){$(this).remove();});
  });
$(window).on('load', function() {
    $('#preloader2').delay(2500).fadeOut('slow',function(){
		$(this).remove();
	});
  });
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
//button animation
$(document).ready(function(){
	
	
	    $(".button").click(function(){
	    	if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#message").val()) === "") {
				return false;
			}
			else{
		        $(this).addClass("btnactive");
		        setTimeout(function(){
		        	$(".button").addClass("success");
		        }, 3700);
		        setTimeout(function(){
		        	$(".button").removeClass("btnactive");
		        	$(".button").removeClass("success");
		        },5000);
		    }
	    });
	
});
