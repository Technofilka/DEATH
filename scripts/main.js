document.querySelector('a').onclick = function () {
 alert('ХАХАХАХВАХАХАХАХМХАХАХЗВХАХАЗВХАЗАХММХАХВАХХАХАХАХАХАХАХАХАХАЗХАЗАХАХАХХААХХАХАХАХААХХААХАХХАХАХАХАВХВХАХВАХАХАХХАХАХААХХАЖХЖМХАЖХЖХАХАХАХМАХИХАИХИХАИХИХИХИХИХАХАХИХАИХАХИХАИХАИХАИХИХИХИХХИАХХАХАХИХВАХИХАХИАХИХАИХХХАХАХУАЫХИВХИВХАХАХЗВХАЗИХЗАХАВХАЖХЖАИХЖАХАХАХХАХАААААХАХХАИМ');
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    if (myImage.getAttribute('src') === "images/077_EbRGXcOZuYk.jpg") {
        myImage.setAttribute('src', "images/046_SGi96B1RXyw.jpg");
    }
    else {
        myImage.setAttribute('src', "images/077_EbRGXcOZuYk.jpg");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Ъ?');
    localStorage.setItem('AAAAA', myName);
    myHeading.textContent = "Я 3a6EPу Т80И GLAZA, " + myName;
}

if (!localStorage.getItem('AAAAA')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}