

  $(function () {
  		$(".btn").click(function () {
					if($(".text1").val().trim().length === "") 
							return;
					$("<li></li>").text($(".text1").val()).prependTo(".ul");
					$(".text1").val("");
  		});
  });
