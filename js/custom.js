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
