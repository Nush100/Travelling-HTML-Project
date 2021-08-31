function registervalidate(regval)
{
 
    var fname = regval.fName.value;
    var lname = regval.lName.value;
	var iname = regval.iName.value;
    var email = regval.email.value;
    var phn= regval.tel.value;
    var gen=regval.g.value;
	var age=regval.age.value;
	var ps=regval.ps.value;
    var cps=regval.cps.value;
	
    if(fname == "")
    {
        alert("Please enter your First name");
        return false;
    }
 
    if(lname == "")
    {
        alert("Please enter your Last name");
        return false;
    }
	
	if(iname == "")
    {
        alert("Please enter your name with initials");
        return false;
    }
	 
    if(!email.includes("@","."))
    {
        alert("Invalid Email");
        return false;
    }
  
    if(phn.length!=10 || isNaN(phn))
    {
        alert("Mobile number is invalid");
        return false;
    }
	
    if(gen == "")
    {
        alert("Please select the gender");
        return false;
    }
  
     
    if(ps == "")
    {
        alert("Please enter your Password");
        return false; 
    }
 
    if(cps == "")
    {
        alert("Enter the same Password again");
        return false;
    }
 
    if(ps != cps) 
    {
        alert("Your Passwords don't match. Please Re-enter the password");
        return false;
    }
	
 
}
