let username;
document.getElementById('mysubmit').onclick = 
function(){
    username = document.getElementById('mytext').value;
    const usernam = username.toUpperCase('');
    
    document.getElementById('myh1').textContent = `HELLO ${usernam}`
}
