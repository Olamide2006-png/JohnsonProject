function hello(callback){
    console.log("hello!")
;
callback();

}
function wait(){
    console.log("wait!!!!!!!")
}
function leave(){
    console.log("leaves!");
}
function goodbye(){
    console.log("Goodbye!!");
}
hello(wait);
function sum(callback,x,y){
    let result = x + y;
    callback(result);

}
function displayconsole(result){
    console.log(result)
}
function displaypage(result){
  document.getElementById("myh1").textContent = result

   

}
sum(displaypage,1,2)