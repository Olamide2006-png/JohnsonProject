// arrow function  = is a concise way to write function expression
//                   good for simple functions that you can onl use once
//                   (parameters) => some code
const hello = (name,age) =>
   { console.log(`hello ${name}`);
    console.log(`you are old ${age}`);
}

hello("johnson",18);
//setTimeout(callback,3000);
const numbers = [1,2,3,4,5,6];
const squares = numbers.map((value) => Math.pow(value,2));
const cubes = numbers.map((value) => Math.pow(value,3));
const evennums = numbers.filter((value)=> value % 2 === 0);
const oddnums = numbers.filter((value) => value % 2 !== 0);
const total = numbers.reduce((previous,next) => previous +  next
)
console.log(squares);
console.log(cubes);
console.log(evennums);
console.log(oddnums);
console.log(total);


