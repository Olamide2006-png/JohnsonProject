// a constructor = is a  special method for defining the properties  and method of the object
 function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`you drive the ${model}`)
    }
 }
const car1 =  new Car("lexus","Rx-350",2025,"black");
const car2 = new Car ("lamboghini","alventador",2025,"red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car1.drive();
car2.drive();

