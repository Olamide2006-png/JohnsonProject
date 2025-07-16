// function declaration =  define a reuseable block of code 
//                         that perform a specific task
// function expression =  is a way to define function as 
//                        values or variables
//const hello = function(){
  //  console.log("hello")
//}
setTimeout(function(){
    console.log("hello")
},3000);
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function square(value){
    return Math.pow(value,2);

});
console.log(squares);
const cube =numbers.map(function(value){
    return Math.pow(value,3);
});
const evenNums = numbers.filter(function(value){
    return value % 2 === 0;
})
const oddNums = numbers.filter(function(value){
    return value % 2 !== 0;
})
const total = numbers.reduce(function(previous,next){
    return previous + next;
})
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);