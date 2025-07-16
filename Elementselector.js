const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruits = document.getElementsByClassName("fruit")
console.log(fruits)
for(let fruit of fruits){
    //fruit.style.backgroundColor ="greenyellow";
}
//Array.from(fruits).forEach(fruit => fruit.style.backgroundColor ="yellow")


const h4element = document.getElementsByTagName("h4");
console.log(h4element);
for(let h4 of h4element){
    h4.style.backgroundColor ="yellow";
}
const lielement = document.getElementsByTagName("li")
Array.from(h4element).forEach(h4element=> h4element.style.backgroundColor="red");
for(li of lielement){
    li.style.colorr="white"
}
Array.from(lielement).forEach(lielement => lielement.style.backgroundColor="lightgreen")


//Query selector picks only the first instance 
const element = document.querySelector("li");
element.style.backgroundColor ="yellow"

//query seector all
const foods = document.querySelectorAll("li")
foods[2].style.backgroundColor ="yellow"