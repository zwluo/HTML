

  	$(function () {
		var colors = ["red","yellow","blue","green","cyan"];
		$(".btn").click(function () {
			var fontColors = parseInt(Math.random() * colors.length);
			var randomTop = parseInt(Math.random() * 300);
			var span = $("<span></span>")				
			span.text($("#input").val())
			span.addClass("danmu")
			span.css({
				"color": colors[fontColors],
				"top": randomTop + "px",
			})
			span.animate({"left":-200},5000,function () {
				$(this).remove();
			}) 
			span.appendTo(".top");
			$("#input").val("");
		});
	});