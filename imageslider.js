const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;
document.addEventListener("DOMContentLoaded",initializesSlider)
function initializesSlider(){
    if(slides.length > 0 ){

   
    slides[slideIndex].classList.add("displaySlide");
    intervalid = setInterval(nextSlide,5000);
     }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length-1;
    }
    slides.forEach(slide=> {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
  slideIndex--;
  showSlide(slideIndex)
  clearInterval(intervalid)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}