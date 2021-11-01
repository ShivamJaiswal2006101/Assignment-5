var x="harish";
console.log(x);
var a=function ()
{
	var x=2006209;
	console.log(x);
	b();
	function b(){
		console.log(x);}
	c();
}
function c()
{
	console.log(x);
}
a();