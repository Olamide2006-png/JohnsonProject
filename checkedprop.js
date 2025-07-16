const mycheckbox = document.getElementById('mycheckbox');
const visabtn = document.getElementById('visabtn');
const Mastercardbtn = document.getElementById('Mastercardbtn');
const vervebtn = document.getElementById('vervebtn');
const mysubmit = document.getElementById('mysubmit');
const subresult = document.getElementById('subresult');
const paymentresult = document.getElementById('paymentresult');
mysubmit.onclick= function(){
    if(mycheckbox.checked){
        subresult.textContent =`you are subscribed`;

    }
    else{
        subresult.textContent =`you are NOT subscribed`; 
    }
    if(visabtn.checked){
        paymentresult.textContent =`you are paying with visa`;

    }
    else if(Mastercardbtn.checked){
        paymentresult.textContent =`you are paying with Master Card`
    }
    else if(vervebtn.checked){
        paymentresult.textContent =`you are paying with verve`
    }
    else{
        paymentresult.textContent ='you did NOT select any payment option'
    }
}