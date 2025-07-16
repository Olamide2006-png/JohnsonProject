let fruit =["apple","orange","banana"];
fruit[0] = "avocardo";
fruit.push("coconut");
fruit.pop();
fruit.unshift("mango");
let numoffruit = fruit.length;
let index = fruit.indexOf("orange");
console.log(index);
console.log(numoffruit);
console.log(fruit);
console.log(fruit[2]);
console.log(fruit[0]);
fruit.sort().reverse();
for (let fruits of fruit){
    console.log(fruits);
}