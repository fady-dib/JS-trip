var first_name = document.getElementById('fname');
var last_name = document.getElementById('lname');
var email = document.getElementById('email');
var year_of_birth = document.getElementById('yob');
var password = document.getElementById('password');
var repeat_password = document.getElementById('repeat-password');
var salary = document.getElementById('sorted-salaries');
var nationality = document.getElementById('nationality');
var palindrome = document.getElementById('palindrome');
var prime_number = document.getElementById('prime');
var course_id = document.getElementById('course-id');
var course_schedule = document.getElementById('course');
var passport_num = document.getElementById('passport');
var reverse = document.getElementById('reverse');
var location = document.getElementById('location');

var form = document.getElementById('myForm');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (first_name.value == "") {
        alert('Please provide your First name');
        first_name.focus();

    }
    if (last_name.value == "") {
        alert('Please provide your Last name');
        last_name.focus();

    }

    var atpos = email.value.indexOf('@');
    var dotpos = email.value.lastIndexOf('.');

    if (atpos < 1 || dotpos - atpos < 2 || email.value.indexOf('-') != -1) {
        alert('Please enter correct E-mail , E-mail can not contain - ');
        email.focus();

    }

    // var regex = /(?=.*[A-Z])(?=.*[@#$%^&+!=])/ || regex.test(password)

    if (password.value.length < 8) {
        alert('Password should contain 8 characters minimum, one special character minimum, at least one upper case letter');

    }

    const form_data = new FormData(form);
    const obj = Object.fromEntries(form_data);
    const json = JSON.stringify(obj);
    console.log(obj);

    palindrome.innerHTML = isPalindrome(nationality.value);
    var age = 2023 - year_of_birth.value;
    var prime = primeNumber(age);
    prime_number.innerHTML = 'Age = ' + age + ' ' + prime;
    var javascript = new course(course_id.value, course_schedule.value);
    reverse.innerHTML = "reverse number in a string: "+searchNumber(passport_num.value);

})


var salary_prompt

function salaryPrompt() {
    salary_prompt = prompt("Last 10 salaries - begin from last ex: 10,5,20");
    if (salary_prompt != null) {
        var list = salary_prompt.split(",");
        sorted_list = mergeSort(list);
        salary.innerHTML = "Salaries: " + sorted_list;
    }
}


function mergeArrays(x, y) {
    array = [];
    while (x.length && y.length) {
        if (x[0] < y[0]) {
            array.push(x.shift());
        }
        else {
            array.push(y.shift());
        }
    }
    return [...array, ...x, ...y];
}

function mergeSort(x) {
    var mid = x.length / 2;

    if (x.length < 2) {
        return x;
    }

    var left_list = x.splice(0, mid)
    return mergeArrays(mergeSort(left_list), mergeSort(x));

}

function isPalindrome(x) {
    if (x.length == 0) {
        return 'Nationality is not palindrome';
    }
    if (x.length == 1) {
        return 'Nationality is palindrome';
    }
    if (x[0] !== x[x.length - 1]) {
        return 'Nationality is not palindrome';
    }
    else {
        return isPalindrome(x.slice(1, x.length - 1));
    }
}

function primeNumber(x) {
    if (x == 1) {
        return 'this number is not prime'
    }
    else if (x == 2) {
        return 'this number is prime'
    }
    else {
        for (var i = 2; i < x; i++) {
            if (x % i == 0) {
                return 'this number is not prime'
            }
        }
        return 'this number is prime'
    }
}

class course {
    constructor(id, schedule) {
        this.id = id;
        this.schedule = schedule
    }
}

function searchNumber(x) {
    var list = [];
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j <= 9; j++) {
            if (x[i] == j) {
                list.push(i);
            }
        }
    }
    var temp;
    let array = x.split("");
    while (list.length > 1) {
        temp = array[list[0]];
        array[list[0]] = array[list[list.length - 1]];
        array[list[list.length - 1]] = temp;
        list.pop();
        list.shift();
    }
    return array.join('')
}

function getIp(){
    fetch('https://api.ipify.org/?format = json')
    .then(results => results.json())
    .then(data => console.log(data.ip))
}
getIp()

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     }
//     else{
//         location.innerHTML = "The browser does not support Geolocation";
//     }
// }

// function showPosition(position){
//     location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
// }

// function showError(error){
//     console.log(error)
//     if (error.PERMISSION_DENIED){
//         location.innerHTML = "The user have denied the request for Geolocation"
//     }
// }
// getLocation();

const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  var user_location = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log(user_location)

  location.innerHTML = user_location.coords.latitude














