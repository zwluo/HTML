var count=5;
function countdown(){
	count--;
	document.getElementsByClassName("second")[0].innerHTML=count;
	setTimeout("countdown()",1000);
	if(count==0)
	{
		location.assign("http://developer.huawei.com/ict/cn");
		clearTimeout(cou);
	}
}
var cou=setTimeout("countdown()",1000);