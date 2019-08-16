function form()                                    
{ 
    var firstName = document.forms["RegForm"]["first_name"].value;               
    var lastName = document.forms["RegForm"]["last_name"].value;               
    var email = document.forms["RegForm"]["email"];    
    var phone = document.forms["RegForm"]["number"].value;  
    var password = document.forms["RegForm"]["password"].value;  
    var confirmPassword = document.forms["RegForm"]["confirm_password"].value;  
   
    if (firstName == "")                                  
    { 
        alert("Please enter your last name"); 
        return false; 
    } 
   
    if (lastName == "")                               
    { 
        alert("Please enter your last name"); 
        // lastName.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        // email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // email.focus(); 
        return false; 
    } 
    if (phone == "")                           
    { 
        window.alert("Please enter your mobile number."); 
        phone.focus(); 
        return false; 
    }   
    if (!Number.isInteger(Number(phone)))                           
    { 
        window.alert("Please a valid mobile number."); 
        // phone.focus(); 
        return false; 
    } 
    if (phone.length != 10)                           
    { 
        window.alert("Please a valid mobile number."); 
        // phone.focus(); 
        return false; 
    } 
   
    if (password == "")                        
    { 
        window.alert("Please enter your password"); 
        // password.focus(); 
        return false; 
    } 
    if (password.length < 8)                        
    { 
        window.alert("Password must contain 8 letters"); 
        // password.focus(); 
        return false; 
    } 
   
    if (confirmPassword == "")                        
    { 
        window.alert("Please enter your confirm Password"); 
        // password.focus(); 
        return false; 
    } 
    if (confirmPassword != password)                        
    { 
        window.alert("Missmatch on confirm password"); 
        // password.focus(); 
        return false; 
    } 
    alert("Welcome " + firstName + " " + lastName);
    return true; 
}
function signIn()
{


    var semail = document.forms["signin"]["semail"];    
    var spassword = document.forms["signin"]["spassword"].value;  



    if (semail.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        // semail.focus(); 
        return false; 
    } 
   
    if (semail.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // semail.focus(); 
        return false; 
    } 
   
    if (semail.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // semail.focus(); 
        return false; 
    } 
    if (spassword == "")                        
    { 
        window.alert("Please enter your password"); 
        // spassword.focus(); 
        return false; 
    } 
    if (spassword.length < 8)                        
    { 
        window.alert("Password must contain 8 letters"); 
        // spassword.focus(); 
        return false; 
    } 
    alert("You are successfully signed in");
    return true;
}
function cform(){

    var cname = document.forms["contact"]["cname"].value;  
    var cemail = document.forms["contact"]["cemail"];    

    if (cname == "")                                  
    { 
        alert("Please enter your name."); 
        // cname.focus(); 
        return false; 
    } 
    if (cemail.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        // cemail.focus(); 
        return false; 
    } 
   
    if (cemail.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // cemail.focus(); 
        return false; 
    } 
   
    if (cemail.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        // cemail.focus(); 
        return false; 
    } 
    return true

}