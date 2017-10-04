
//	$(function () {
//		$("#ad-carouse").carousel();
//      $(".navbar-collapse .dropdown-menu a").click(function (e) 
//  	{
//          var href = $(this).attr("href");
//          var tabId = $(this).attr("data-tab");
//          if ("#" != href) 
//          {
//              e.preventDefault();
//              $(document).scrollTop($(href).offset().top - 70);
//              if (tabId) 
//              {
//                  $("#feature-tab a[href=#" + tabId + "]").tab('show');
//              }
//          }
//		});
//		
//		$("#GoTop").click(function () {
//		$("html,body").stop().animate({scrollTop:0});
//	})
//	})
//
	$(function () {
		$(".dropdown-menu a").on("click",function(){
	            var clickhref = $(this).attr("data-tab");
//	            console.log(clickhref);
//	            console.log(123);
	            $("#feature-tab a[href='" + clickhref + "']").tab('show');
	       });
	       
	    $("#GoTop").click(function () {
			$("html,body").stop().animate({scrollTop:0});
		});
	});
			