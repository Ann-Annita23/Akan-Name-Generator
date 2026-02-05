// form to be submitted
document.getElementById("akan-name").addEventListener("submit", function (e) {
    e.preventDefault();

//User inputs
const DD = parseInt(document.getElementById("date").value);
const MM = parseInt(document.getElementById("month").value);
const YYYY = parseInt(document.getElementById("year").value);
const gender = document.getElementById("gender").value;

//Validation
if(!DD || !MM || !YYYY|| gender=== "") {
    document.getElementById("results").textContent="Please fill in all fields.";
    return;
}

//calculation
let month=MM;
let year=YYYY;

if (month < 3){
    month +=12;
    year -=1;
}

const CC = Math.floor(year / 100);
const YY = year % 100;
const day= 
(DD+
    Math.floor((13*(month+1))/5) +
    YY +
     Math.floor(YY/4)+ 
     Math.floor(CC/4)-
     2*CC)%7;

    //Allow positive index
    const dayIndex = (day+7) % 7;

    // days and Akan names
    const days = ["Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday"];
    const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
    const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua"];

    const bornDay = days[dayIndex];
    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

    //Display result
    document.getElementById("result").textContent =
    `You were born on a ${bornDay}. Your Akan name is ${akanName}.`;
});