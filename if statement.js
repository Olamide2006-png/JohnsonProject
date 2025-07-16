let age = 25;
if(age >=25){
    console.log("you are old enough to enter the site");
}
else{
    console.log("you must be 25  to enter the site ");

}
let time = 14;
if(time<12){
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon");
}
let isstudent = false;
if(isstudent){
    console.log("you are a student");
}
else{
    console.log("you are not a student");
}
//nested if statement
let yourage = 19;
let haslicense = false;
if(yourage >= 16){
    console.log("you are old enough to have a drive");
    if(haslicense){
        console.log("you have a license!");

    }
    else{
        console.log("you do not have a license")
    }
}
else{
    console.log("you are not old enough to have a license");
}
//else if statement

const mybutton = document.getElementById('mysubmit');
const mytext = document.getElementById('mytext');
const resultelement = document.getElementById('resultelement');
let myage ;
 mysubmit.onclick = function(){
   myage = mytext.value;
   myage = Number(myage);
if(myage >= 18){
    resultelement.textContent = `you are old enough to bet`;
}
 else if(myage<0){
    resultelement.textContent = `your age can not be less than 0`;
 }

 else if(myage == 18){

    resultelement.textContent = `you just clock, the right age to enter`;
 }
else{
    resultelement.textContent = `you must be 18+ to enter these site`;
}

 }
