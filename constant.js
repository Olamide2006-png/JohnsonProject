// const = varisble can't be changed

const PI = 3.14159;
let radius;
let circumference;




document.getElementById('mysubmit').onclick = function(){
     radius = document.getElementById('mytext').value;
     radius = Number(radius);
     circumference = 2 * PI * radius;
     document.getElementById('myh3').textContent =  "cicumference: "+ circumference + "cm";
     

}