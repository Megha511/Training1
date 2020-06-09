
var grades=[2,5, , ,25,34,56,21,13];
var sum=0;
var count=0;
function aver(){
if(grades.length!=0)
{
for(index=0;index<grades.length;index++)
{
	if (grades[index]!=undefined)
	{
     sum+=grades[index];
	 count+=1;
	}
}
document.write(sum/count);
}
else
{
	document.write("The array is empty");
}
}