		
	// window.onload() {	
		$(function () {
			setTimeout(() => {
				$("#menu1 ul li").mouseenter(function () {
					var index=$(this).index();
					$("#menu2,#menu3").css("display","block");
							$("#menu2 ul li").eq(index).children("p").stop().slideDown()
											.parent("li").siblings().children("p").stop().slideUp();
							$("#menu3 ul li").eq(index).children("p").stop().slideDown()
											.parent("li").siblings().children("p").stop().slideUp();
				});
				$(".menu").mouseleave(function () {
					$("#menu2").stop().slideUp();
					$("#menu3").stop().slideUp();
				})
			},900)
			// });
		});
	// }