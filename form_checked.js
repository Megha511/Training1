/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  if(document.getElementById("same").checked)
    {
 var x= document.getElementById("shippingName");    var y= document.getElementById("shippingZip"); document.getElementById("billingName").value=x.value;
 document.getElementById("billingZip").value=y.value;
    }
  else
    {
      document.getElementById("billingName").value=""
document.getElementById("billingZip").value=""      
    }
}