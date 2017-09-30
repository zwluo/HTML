

  $(function () {
  	$(".box li").mouseenter(function () {
			$(this).children("span").stop().animate({top:0});
				var index=$(this).index();
				$("audio").get(index).load();
				$("audio").get(index).play();
  	})
  	.mouseleave(function () {
			$(this).children("span").stop().animate({top:50});
  			var index=$(this).index();
				$("audio").get(index).pause();
  	});
  });
