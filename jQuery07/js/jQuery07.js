

  $(function () {
		var colors = ["red","yellow","blue","green","cyan"];
			$(".btn").click(function () {
				var fontColors = parseInt(Math.random() * colors.length);
				var randomTop = parseInt(Math.random() * 300);
				$("<span></span>").text($("#input").val())
				                  .css({
				                  	"color": "colors[fontColors]",
				                  	"margin-left": "1500px",
				                  	"margin-top": "ramdomTop"
				                  })
				                 .animate({"margin-left":-300},15000,function () {
				                  	$(this).remove();
				                  }) 
				                  .appendTo(".top");
		  		$("#input").val("");
			});
	//		$("#input").val("");
});
