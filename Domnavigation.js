const element = document.getElementById('vegetable');
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor ="yellow";
const ulelements = document.querySelectorAll("ul");
ulelements.forEach(ulelements => {
    const firstChild = ulelements.firstElementChild;
    firstChild.style.backgroundColor ="yellow"
})
//last element child
const elements = document.querySelectorAll("ul")
elements.forEach(elements=>{
const lastchild = elements.lastElementChild;
lastchild.style.backgroundColor="lightgreen"
})
const elementsss =document.getElementById('fruit');
const lastchild = elementsss.lastElementChild;
lastchild.style.backgroundColor = "lightgreen"
const elementss = document.getElementById("Apple")
const nextsibling = elementss.nextElementSibling;
nextsibling.style.backgroundColor = "red";

//previous element
const el = document.getElementById("ice cream");
const prevSibling = el.previousElementSibling;
prevSibling.style.backgroundColor = "red";
//parent  element
const ele = document.getElementById("Apple")
const parent = ele.parentElement;
parent.style.backgroundColor="hsl(0, 3.20%, 87.80%)"

// children element
const first = document.getElementById("carrots");
const child = first.children;
console.log(child);
Array.from(children).forEach(child => {
    child.style.backgroundColor ="blue";

})