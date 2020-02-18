const HOURHAND = document.querySelector("#hour"); 
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const OPTIONS = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};


var date = new Date();
var time = date.toLocaleTimeString('en-US');
console.log(time);
var timeZone = date.getTimezoneOffset();
console.log(Date.now());

console.log(date.toLocaleDateString('en-GB', OPTIONS));


let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(date);
console.log(hr);
console.log(min);
console.log(sec);

let hrPosition = (hr*360/12) + (min*(360/60)/12)
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = (sec*360/60);

var arr = date.toLocaleString();
var res = arr.split(" ");
//console.log(date.split(" "));

function runTheClock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

     var digTime = new Date();
     document.getElementById("digitalTime").innerHTML = digTime.toLocaleTimeString('en-US');
     document.getElementById("date").innerHTML = digTime.toLocaleDateString('en-GB', OPTIONS);
    

    
}

var interval = setInterval(runTheClock, 1000);