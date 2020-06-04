function check()
{
	var email1= document.getElementById("mail_addr");
	var email2= document.getElementById("mail_repeat");
	if(email1.value !=email2.value)
	 alert("The email ids do not match!");
	 return false;
}