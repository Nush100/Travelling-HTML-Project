function contactvalidate(contact)
{
 
    var fname = contact.fName.value;
    var lname = contact.lName.value;
    var email = contact.email.value;
    var phn= contact.tel.value;
    var msg=contact.msg.value;
	var fdb=contact.feed.value;
 
    if(fname == "")
    {
        alert("Please enter your First name.");
        return false;
    }
 
    if(lname == "")
    {
        alert("Please enter your Last name.");
        return false;
    }
	
	 
    if(!email.includes("@","."))
    {
        alert("Invalid Email.");
        return false;
    }
  
    if(phn.length!=10 || isNaN(phn))
    {
        alert("Mobile number is invalid.");
        return false;
    }
	
    if(msg == "")
    {
        alert("Please enter the message.");
        return false;
    }

 
}
 


