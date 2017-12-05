

  $(function () {
			$(window).scroll(function () {
					if($(window).scrollTop() >= 1000)
					{
					  	$(".GoTop").stop().fadeIn(1000);
					}
					else
					{
						  $(".GoTop").stop().fadeOut(1000);
					}
			});
  	
  	$(".GoTop").click(function () {
  		    $("html,body").stop().animate({scrollTop:0});
  	  })
  })