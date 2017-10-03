

  $(function () {
  	
  	var KX = "☆";
  	var SX = "★";
  	//鼠标进入事件，当前Li及前面的li实心，后面的空心
  	$(".content>li").on("mouseenter",function () {
  		$(this).text(SX).prevAll().text(SX);
  		$(this).nextAll().text(KX);
  	});
  	//鼠标点击事件，添加点击标记
  	$(".content>li").on("click",function () {
  		$(this).addClass("mark").siblings().removeClass("mark");
  	});
  	//鼠标离开事件，添加了标记的li及前面的li实心
  	$(".content").on("mouseleave",function () {
  		$(this).children().text(KX);
  		$("li.mark").text(SX).prevAll().text(SX);
  	});
  	
  });