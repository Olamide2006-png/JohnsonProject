// destructuring = extract values from an arrays and objects,
//               then assign them to a variables in a convinent way
//               [] = to perform array destructuring
//               {} = to perform object destructuring
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);



const color = ["red","blue","green","white"];
[color[0],color[3]] = [color[3],color[0]]
console.log(color[0]);
console.log(color[3]);


//example 3
const colors = ["red","blue","green","white"];
const [firstcolor,secondcolor,thirdcolor,...extracolors] = colors
console.log(firstcolor);
console.log(secondcolor)
console.log(thirdcolor)
console.log(extracolors);
//example to extract value from object
//Destrucure in function parameter
function displayPerson({firstname,lastname,age,job}){
    console.log(`${firstname} ${lastname} `);
    console.log(`${age}`)
    console.log(`${job}`)

}
const person1 = {
    firstname: "spongebob",
    lastname: "squarepant",
    age: 30,
    job:"Fry cook",

}
const person2 = {
    firstname: "patrick",
    lastname: "star",
    age: 30,
    job: "unemlpoyed",
    
    

}
//const {firstname,lastname,age,job} = person1;

//console.log(firstname)
//console.log(lastname)
//console.log(age)
//console.log(job)
const {firstname,lastname,age,job="unemployed"} = person2;
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(job)
displayPerson(person2)
