//.filter() 
// element create a new array by filtering outelement
let numbers = [1,2,3,4,5,6,7];
let eveNums = numbers.filter(isEven);
let oddnums = numbers.filter(isOdd);
console.log(eveNums)
console.log(oddnums)
function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}
const ages = [16,17,18,19,20,60];
const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element){
    return element >= 18;

}
const minor = ages.filter(isMinor);
console.log(minor)
function isMinor(element){
    return element <18;

}
const words =["apple","orange","banana","kiwi","pomegranate","coconut"];
const shortwords =  words.filter(getshortword);
console.log(shortwords);
function getshortword(element){
    return element.length <= 6;


}