		
		
		$(function () {
			$("#menu1 ul li").mouseenter(function () {
				var index=$(this).index();
        $("#menu2,#menu3").css("display","block");
			    $("#menu2 ul li").eq(index).children("p").stop().slideDown()
//			                     .css("opacity",1)
			                     .parent("li").siblings().children("p").stop().slideUp();
			    $("#menu3 ul li").eq(index).children("p").stop().slideDown()
//			                     .css("opacity",1)
			                     .parent("li").siblings().children("p").stop().slideUp();
			});
		  $("#menu1 ul").mouseleave(function () {
				  $("#menu2").stop().slideUp();
				  $("#menu3").stop().slideUp();
			});
//      $("#menu1 ul li").mouseenter(function () {
//      	var index=$(this).index();
//      	$("#menu2").css("display","block");
//      	$("#menu3").css("display","block");
//      });
		});
