const Month = ["January","Febuary","March","April","May","June","July","August","September","Octomber"
   , "November","December"
]
const DayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


function updaateClock(){
    const now = new Date();
    document.getElementById("day").textContent = (DayOfWeek[now.getDay()] + " " + now.getDate()
    + ' Of ' + Month[now.getMonth()] + ' ' +now.getFullYear());
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours% 12||12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours} :${minutes} :${secs} ${meridian}`;
    document.getElementById("clock").textContent =timestring;

}

updaateClock();
setInterval(updaateClock,1000);