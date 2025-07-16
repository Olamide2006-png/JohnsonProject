document.title = "My website"
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
document.body.style.color = "white";


const username = " Johnson";
const welcomemsg =document.getElementById("welcome-msg");
welcomemsg.textContent += username === "" ?'Guest': username;
console.log(welcomemsg)
console.dir(document);