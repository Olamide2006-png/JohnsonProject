function happybirthday(username,age){
    
    console.log(`happy birthday to you  ${username}`);
    console.log(`you are ${age} years old`);
}
happybirthday("johnson",19);
function addition(x,y){
    let result = x + y;
    
    return result;
}
let answer = addition(2,3);
 console.log(answer);
 function subtract(x,y){
    return x-y;
 }
 console.log(subtract(2,3));
 function multiply(x,y){
    return x*y;
 }
 console.log(multiply(2,3));
function divide(x,y){
   
        return x/y;
     
    
}
console.log(Math.floor(divide(5,3)));
//function to get even and odd number

function isEven(number){

    if(number%2=== 0){
        return true;
    
    }
    else{
        return false;
    }

 
}
console.log(isEven(10));
//function to get even shortcut

function isEven(number){

   return number %2 === 0 ?true :false;

 
}
console.log(isEven(10));
function isvalidemail(email){
    if(email.includes("@")){
        return true;

    }
    else{
        return false;
    }
}
console.log(isvalidemail("johnson@fake.com"));
function isvalidemail(email){
    return email.includes("@")?true:false
}
console.log(isvalidemail("londoner@fake.com"));

