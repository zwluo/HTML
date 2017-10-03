

  $(function () {
  	
  	$("#add").on("click", function () {
  		
  	});
  	
  	$("#empty").on("click", function () {
  		$(".tab").empty();
  	});
  	
  	$("a").on("click", function () {
  		$(this).parent().parent().remove();
  	});
  	
  });