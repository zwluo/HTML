

  $(function () {
  	$(window).scroll(function () {
  		if($(window).scrollTop() >= $(".top").height())
  		{
  			$(".above").addClass("fixed");
  			$(".below").css("margin-top",$(".above").height());
  		}
  		else
  		{
  			$(".above").removeClass("fixed");
  			$(".below").css("margin-top",0);
  		}
  	})
  });
