const fruits = [{name:"apple",color:"white",calorie:95},
    {name:"orange",color:"orange",calorie:45},
    {name:"banana",color:"yellow",calorie:105},
    {name:"coconut",color:"red",calorie:95},
    {name:"pineapple",color:"yellow",calorie:159},
];

console.log(fruits[4].calorie);
fruits.push({name: "grapes",color:"purple",calorie:62}),
console.log(fruits[5].name);
//fruits.splice(1,2)
//console.log(fruits)
//using the for each method
fruits.forEach(fruits =>console.log(fruits.name));
// using the map method
const fruitColors = fruits.map(fruits => fruits.color);
const fruitcalories = fruits.map(fruits =>fruits.calorie);
console.log(fruitcalories)
console.log(fruitColors)
//using the filter metod
const yellowFruit = fruits.filter(fruits => fruits.color === "yellow");
console.log(yellowFruit);
const lowCalFruit = fruits.filter(fruits => fruits.calorie < 100)
console.log(lowCalFruit)
const highCalFruit = fruits.filter(fruits => fruits.calorie >100)
console.log(highCalFruit)
const maxfruit = fruits.reduce((max,fruits)=> fruits.calorie > max.calorie ?
fruits : max);
console.log(maxfruit)
const minfruit = fruits.reduce((min,fruits)=> fruits.calorie < min.calorie ?
fruits : min);
console.log(minfruit)
