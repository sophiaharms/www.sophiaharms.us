var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

 var timeOut = null;

 $('.next').click(function(e,simulated){
     if(!simulated){
         clearTimeout(timeOut);
      }
 });

 (function autoAdvance(){
   $('.next').trigger('click',[true]);
     timeOut = setTimeout(autoAdvance,5000);
 })();

$(document).ready(function() {
  if (location.hash) {
    var hash = location.hash.slice(1);
    $(".dot").eq(hash).click();
  }
});
