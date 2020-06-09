var numbers = [10,20,45,61,78,24];
function load_()
{
document.getElementById("See").innerHTML=numbers;
numbers.pop();
}
function add()
{
	var x=prompt("What number would you like to add?");
    numbers[numbers.length]=x
	document.getElementById("See").innerHTML=numbers;
	

}
