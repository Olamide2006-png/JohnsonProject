class product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayproduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(1)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price + salesTax);
    }
}
const salesTax = 0.5;

const product1 = new product("shirt",19.99);
product1.displayproduct();
const product2 = new product("trouser",18.29);
product2.displayproduct();
const product3 = new product("bread",15.6);
product3.displayproduct()


const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax):$${total}`);