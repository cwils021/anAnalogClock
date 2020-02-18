const HOURHAND = document.querySelector("#hour");   //select hour hand on clock
const MINUTEHAND = document.querySelector("#minute");   //select min hand on clock
const SECONDHAND = document.querySelector("#second");   //select sec hand on clock
const OPTIONS = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};  //options for date string display


var date = new Date();  //create new date object
var time = date.toLocaleTimeString('en-US'); //DELETE?
console.log(time);  //DELETE?
var timeZone = date.getTimezoneOffset();    //DELETE?
console.log(Date.now());    //DELETE?

console.log(date.toLocaleDateString('en-GB', OPTIONS)); //test datestirng options


let hr = date.getHours();   //get current hour at page load
let min = date.getMinutes();    //get current min at page load
let sec = date.getSeconds();    //get current sec at page load

//test prints
console.log(date);
console.log(hr);
console.log(min);
console.log(sec);

//convert time value to degrees on clock
let hrPosition = (hr*360/12) + (min*(360/60)/12);   
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = (sec*360/60);


function runTheClock(){ //function that moves  clock arms
    //set new position value for clock arms
    hrPosition = hrPosition + (3/360); //degrees to move hour hand every second
    minPosition = minPosition + (6/60); //degrees to move min hand every second
    secPosition = secPosition + 6;  //degrees to move sec hand every second
    
    //CSS transform to move clock arms to new position
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    
    
    //To display date and digital time
    var digTime = new Date();
    document.getElementById("digitalTime").innerHTML = digTime.toLocaleTimeString('en-US');
    document.getElementById("date").innerHTML = digTime.toLocaleDateString('en-GB', OPTIONS);    
}

var interval = setInterval(runTheClock, 1000);  //rerun function every 1s
