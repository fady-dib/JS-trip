var first_name = document.getElementById('fname');
var last_name = document.getElementById('lname');
var email = document.getElementById('email');
var year_of_birth = document.getElementById('year-of-birth');
var password = document.getElementById('password');
var repeat_password = document.getElementById('repeat-password');
var salary = document.getElementById('sorted-salaries');
var nationality = document.getElementById('nationality');
var palindrome = document.getElementById('palindrome');

var form = document.getElementById('myForm');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (first_name.value == ""){
        alert('Please provide your First name');
        first_name.focus();
        
    }
    if(last_name.value == ""){
        alert('Please provide your Last name');
        last_name.focus();
        
    }

    var atpos = email.value.indexOf('@');
    var dotpos = email.value.lastIndexOf('.');

    if( atpos < 1 || dotpos - atpos < 2 || email.value.indexOf('-') != -1 ){
        alert('Please enter correct E-mail , E-mail can not contain - ');
        email.focus();
        
    } 

   // var regex = /(?=.*[A-Z])(?=.*[@#$%^&+!=])/ || regex.test(password)

    if (password.value.length < 8 ){
        alert('Password should contain 8 characters minimum, one special character minimum, at least one upper case letter');
    
    }

    const form_data = new FormData(form);
    const obj = Object.fromEntries(form_data);
    const json = JSON.stringify(obj);
    console.log(obj);

    palindrome.innerHTML = isPalindrome(nationality.value);
    
    })
  var salary_prompt

    function salaryPrompt(){
     salary_prompt = prompt("Last 10 salaries - begin from last ex: 10,5,20");
     if (salary_prompt != null) {
        var list = salary_prompt.split(",");
        sorted_list = mergeSort(list);
     salary.innerHTML = "Salaries: " + sorted_list;
    }
    }


    function mergeArrays(x, y){
        array = [];
        while (x.length && y.length){
            if (x[0] < y[0]){
                array.push(x.shift());
            }
            else{
                array.push(y.shift());
            }
        }
        return [...array, ...x, ...y];
    }

     function mergeSort(x){
          var mid = x.length /2;

          if(x.length < 2){
            return x;
          }

          var left_list = x.splice(0,mid)
          return mergeArrays(mergeSort(left_list), mergeSort(x));

     }

    function isPalindrome(x) {
        if (x.length == 0){
            return 'Nationality is not palindrome';
        }
        if(x.length == 1){
            return 'Nationality is palindrome';
        }
        if(x[0] !== x[x.length -1]){
            return 'Nationality is not palindrome';
        }
        else {
            return isPalindrome(x.slice(1, x.length -1 ));
        }
    }

    
    


   




