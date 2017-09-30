

  $(function () {
  	$(".btn01").click(function () {
  		$(".Lselect>option").appendTo(".Rselect");
  	});
  	
  	$(".btn02").click(function () {  	
  		$(".Rselect>option").appendTo(".Lselect");
  	});
  	
  	
  	$(".btn03").click(function () {
  		$(".Lselect>option:selected").appendTo(".Rselect");
  	});
  	
  	$(".btn04").click(function () {
  		$(".Rselect>option:selected").appendTo(".Lselect");
  	});
  	
  });
