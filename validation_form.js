

  function Validationform(){

    var user = document.getElementById("user").value ;
    // var age = document.getElementById('age').value ;
    // var phone = document.getElementById('phone').value ;
    // var email1 = document.getElementById('email1').value ;
    // var role = document.getElementById('role').value ;
    // var about = document.getElementById('about').value ;
    // var Identity = document.getElementById('Identity').value ;
    // var password = document.getElementById('password').value ;
    // var confirmpass = document.getElementById('confirmpass').value ;


    if( user == " "){
        document.getElementsById("fullname").innerHTML = " * Please Enter Your Name";
         
        return false;
    }
    // if((text1.length <=2) ||(text1.length > 20)){
    //     document.getElementById('fullname').innerHTML = " *   Name lenght must be between 2 and 20";
    //     return false;
    // }
    // if(!isNaN(text1)){
    //     document.getElementById('fullname').innerHTML = " * Only Characters are allowed";
    //     return false;
    // }


    // if( age == " "){
    //     document.getElementById('Age1').innerHTML = " * Please Enter Your Mobile Number";
    //     return false;
    // }
    
    // if( phone == " "){
    //     document.getElementById('phones').innerHTML = " * Please Enter Your Mobile Number";
    //     return false;
    // }
    // if( email1 == " "){
    //     document.getElementById('emails').innerHTML = " * Please Enter Your Email";
    //     return false;
    // }
    // if( role == " "){
    //     document.getElementById('Roles').innerHTML = " * Please Enter Your Role";
    //     return false;
    // }
    // if( about == " "){
    //     document.getElementById('Abouts').innerHTML = " * Please Enter Your About Somthing";
    //     return false;
    // }
    // if( Identity == " "){
    //     document.getElementById('identity').innerHTML = " * Please Enter Your ID Number";
    //     return false;
    // }
    // if( password == " "){
    //     document.getElementById('Password').innerHTML = " * Please Make Your Password";
    //     return false;
    // }
    // if( confirmpass == " "){
    //     document.getElementById('confirmpassword').innerHTML = " * Please Confirm Your Password";
    //     return false;
    // }
    
     
}
 console.log(Validationform());