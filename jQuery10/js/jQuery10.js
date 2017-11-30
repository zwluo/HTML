

  $(function () {
  	$("#add").on("click", function () {
			// $(".tab").appendChild()
  	});
  	
  	$("#empty").on("click", function () {
  		$(".tab").empty();
  	});
  	
  	$("a").on("click", function () {
  		$(this).parent().parent().remove();
  	});
  	
  });