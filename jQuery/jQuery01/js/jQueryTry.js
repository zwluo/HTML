  /* 
   window.onload=function ()  {

  
  btn1.onclick=function () {
  	for (var i=0;i<divs.length;i++) {
  		divs[i].style.display="block";	
  	}
  };
  btn2.onclick=function () {
  	for (var i=0;i<divs.length;i++) {
  		divs[i].innerHTML="E:\文件\视频\前端\jQuery教程\day01\03-视频";
  	}
  };
}
  */ 
  
  $(function () {
  	$("#btn1").click(function(){
  		$("div").show();
  	});
  	
  	
  	$("#btn2").click(function () {
  		$(".box").text("替换文字！");
  	});
  });
