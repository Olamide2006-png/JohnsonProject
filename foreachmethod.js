let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(display);

function double(element,index,array){
    array[index] = element*2;
}
function square(element,index,array){
    array[index] = Math.pow(element,2);

}
function display(element){
    console.log(element);
}
let fruit =["apple","orange","banana","coconut"];
function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
fruit.forEach(capitalize);
fruit.forEach(display);
function display(element){
    console.log(element)
}

