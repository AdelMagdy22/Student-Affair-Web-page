function addstudent(){
    var ID=document.getElementById("ID").value;
    var fname=document.getElementById("fname").value;
    var phone=document.getElementsById("phone").value;
    var email=document.getElementById("email").valu;
    if (ID==""){
       alert("Error:please enter id");
       document.getElementById("ID").focus();
       return false;
    
    }
    if(phone==""){
        alert("Error:please enter phone");
        document.getElementById("phone").focus();
        return false;
    }
    if (email==""){
        alert("Error:please enter email");
        document.getElementById("email").focus();
        return false;
     
     }
     if (fname==""){
        alert("Error:please enter fname");
        document.getElementById("fanme").focus();
        return false;
     
     }
    
    };
    
