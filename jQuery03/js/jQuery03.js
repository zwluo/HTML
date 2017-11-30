

  $(function () {
  	$("li").mouseenter(function () {
  		$(this).stop().animate({width:700},800).siblings().stop().animate({width:100},800)
  		      .mouseleave(function () {
  		 					$("li").stop().animate({width:200},200)
  					});
  		})
  });