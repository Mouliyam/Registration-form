var err_msg="";
	

	function onlyAlphabets(evt) 
	{
	var charCode;
	if (window.event)
		charCode = window.event.keyCode;  //for IE
	else
		charCode = evt.which;  //for firefox
	if (charCode == 32) //for &lt;space&gt; symbol
		return true;
	if (charCode > 31 && charCode < 65) //for characters before 'A' in ASCII Table
		return false;
	if (charCode > 90 && charCode < 97) //for characters between 'Z' and 'a' in ASCII Table
		return false;
	if (charCode > 122) //for characters beyond 'z' in ASCII Table
		return false;
	return true;
}
	
function isNumberKey(evt)
{ // Numbers only
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function pwdMatch()
{
	var pwd=document.create_account.pwd.value;
	var cpwd=document.create_account.cpwd.value;
	if(cpwd!=pwd)
	{
		document.getElementById("cpwd").style.border = "1px solid #FF0000";
		document.getElementById("pwd").style.border = "1px solid #FF0000";
	}
	else
	{
		document.getElementById("cpwd").style.border = "";
		document.getElementById("pwd").style.border = "";
	}
}



function checkMail(emailId)
{
	
	var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	 if(!(expr.test(emailId)))
	 {
		 alert("Invalid E-Mail");
		 return false;
	 }
	
}

function isMobileNo(mobile) {
	 
        var pattern = /^\d{10}$/;
        if (!pattern.test(mobile)) {
                alert("It is not valid mobile number.input 10 digits number!");
            return false;
		}

    }  