// JavaScript Document
var    xh=new Array(53);
          flag=0;
          timer=null;      
		  for(var i=0;i<53;i++)   {  xh[i]=i+1;  }
 window.onload=function()
 {
	 var title=document.getElementById("title");
	        start=document.getElementById("start"),
	        stop=document.getElementById("stop");
		    start.onclick=begin;
			stop.onclick=end;
document.onkeyup=function(event)
{
      event = event || window.event;
      if(event.keyCode==13)
	  {
         if(flag==0)
		 {
           begin();
           flag=1;
         }
	  }
      else  if(event.keyCode==32)
	 {
		 if(flag==1)
		 {
           end();
           flag=0;
         }
	 }
	 else {alert("错误!")}
}
			function begin()		
			{
		      clearInterval(timer);
	          timer=setInterval(function()
	              {
	         var random=Math.floor(Math.random()*xh.length);
	         title.innerHTML=xh[random];
	              },50);
            start.style.background="#999";
			}
function end()
{
	       clearInterval(timer);
	       start.style.background="#F00";
}
}
