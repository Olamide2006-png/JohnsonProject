const newH1 = document.createElement("h1");
newH1.textContent="i like pizza";
//note that append() and it to the last element
//document.body.append(newH1)

//note also that prepend() adds it to the first element
document.body.prepend(newH1)
newH1.id= "myh1";
newH1.style.color = "tomato"
newH1.style.textAlign ="center";
//document.getElementById("box1").prepend(newH1);
document.getElementById("box1").append(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1,box2);



//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1,boxes[0]);
//Remove html
document.getElementById("box1").removeChild(newH1)



const newListElement = document.createElement("li");
newListElement.textContent ="coconut";
newListElement.id="coconut";
newListElement.style.fontWeight ="bold";
newListElement.style.backgroundColor ="lightgreen";
//document.body.append(newListElement)
//document.getElementById("fruit").prepend(newListElement)
const listItems = document.querySelectorAll("ol li");
document.getElementById("fruit").insertBefore(newListElement,listItems[1]);