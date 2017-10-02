

  $(function () {
  	$(window).scroll(function () {
  		if($(window).scrollTop() >= 1000)
  		{
  			$(".GoTop").fadeIn(1000);
  		}
  		else
  		{
  			$(".GoTop").fadeOut(1000);
  		}
  	});
  	
  	$(".GoTop").click(function () {
  		$("html,body").animate({scrollTop:0});
  	})
  })