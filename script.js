var first_name = document.getElementById('fname');
var last_name = document.getElementById('lname');
var email = document.getElementById('email');
var year_of_birth = document.getElementById('year-of-birth');
var password = document.getElementById('password');
var repeat_password = document.getElementById('repeat-password');

var form = document.getElementById('myForm')



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (first_name.value == ""){
        alert('Please provide your First name')
        first_name.focus()
        
    }
    if(last_name.value == ""){
        alert('Please provide your Last name')
        last_name.focus()
        
    }

    var atpos = email.value.indexOf('@');
    var dotpos = email.value.lastIndexOf('.')

    if( atpos < 1 || dotpos - atpos < 2 || email.value.indexOf('-') != -1 ){
        alert('Please enter correct E-mail , E-mail can not contain - ')
        email.focus()
        
    } 

   // var regex = /(?=.*[A-Z])(?=.*[@#$%^&+!=])/ || regex.test(password)

    if (password.value.length < 8 ){
        alert('Password should contain 8 characters minimum, one special character minimum, at least one upper case letter')
    
    }

    const form_data = new FormData(form);
    const obj = Object.fromEntries(form_data);
    const json = JSON.stringify(obj)
    console.log(obj)
    
    })





