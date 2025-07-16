

//try{
    //console.log(x);
    //Network Errors
    //Promise Rejection
    //Security Errors
//}
//catch(error){
    //console.error(error);
//}
//finally{
   // console.log("This always executes");
//}
//example 2
try{ 


    const dividend =Number(window.prompt("Enter a dividend: "));
    const divisor =Number(window.prompt("Enter a divisor: "));
    if(divisor == 0){
        throw new Error("you can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number")

    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
    console.log("you have rached the end!")
}