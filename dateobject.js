//date object  = object that contain values that represent dates and times 
//               dates objects can be changed and formatted




//Date(year,month,day,hour,minute,second,ms)
const dates = new Date(2025,4,5,4 ,7);

console.log(dates);
const year = dates.getFullYear();
const month = dates.getMonth();
console.log(year)
console.log(month)
const secs = dates.getSeconds()
console.log(secs)
const day = dates.getDate()
console.log(day)
const hour = dates.getHours()
console.log(hour)
const minute = dates.getMinutes()
console.log(minute)
const dayOfWeek = dates.getDay()
console.log(dayOfWeek)
const date = new Date()
date.setFullYear(2025)
date.setMonth(5)
date.setDate(3)
date.setHours(4)
date.setMinutes(3)
date.setSeconds(3)
console.log(date)

//comparing dates
const date1 = new Date("2023-12-31");
const date2 = new Date("2025-01-01");
if(date2>date1){
    console.log("Happy New Year!");


}
else{
    console.log("Welcome To A New Day")
}