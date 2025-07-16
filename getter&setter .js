class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;

    }
    set width(newwidth){
        if(newwidth > 0){
            this._width= newwidth;
        }
        else{
            console.error("width must be a positive numbers")
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height = newheight;

        }
        else{
            console.error("Height must be a positive number")
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    } 
    get area(){
        return this._width* this._height
    }
}
const rectangle = new Rectangle(3,4);
rectangle.width = 5;
rectangle.height = 6;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area.toFixed(1) +  " cm³");








class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    set firstname(newfirstname){
        if(typeof newfirstname === "string"&&this.firstname.length > 0){
            this._firstname = newfirstname;
        }
        else{
            console.error("Firstname must be a non empty string");
        }
    }



    set lastname(newlastname){
        if(typeof newlastname === "string" && this.lastname.length > 0){
            this._lastname = newlastname;
        }
        else{
            console.error("lastname must be a non empty string");
        }
    }




    set age(newage){
        if(typeof newage === "number" && newage >= 0){
            this._age = newage
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }



}
const person = new Person(420,69,"pizza");
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age)