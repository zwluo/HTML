

  $(function () {
  	$(".box li").mouseenter(function () {
//			$("span").stop().animate({"margin-top":0});
				var index=$(this).index();
				$("audio").get(index).load();
				$("audio").get(index).play();
  	})
  	
  	.mouseleave(function () {
//			$("span").stop().animate({"margin-top":50});
  			var index=$(this).index();
				$("audio").get(index).pause();
  	});
  	
  	var flag = true;
//	var key = e.keyCode;
  	
  	$(document).on("keydown",function (e) {
  		
  		var k = e.keyCode;
  		
		  if(flag)
  		{	
  			flag = false;
			  if(e.keyCode >= 49 && e.keyCode <=53)
  			{
	  			$(".box li").eq(e.keyCode - 49).trigger("mouseenter");
  			}
  		}
  		
  	});
  	
  	$(document).on("keyup",function (e) {
  		flag = true;
  		if(e.keyCode >= 49 && e.keyCode <=53)
		  {
			  $(".box li").eq(e.keyCode - 49).trigger("mouseleave");
		  }
  	});
  });
