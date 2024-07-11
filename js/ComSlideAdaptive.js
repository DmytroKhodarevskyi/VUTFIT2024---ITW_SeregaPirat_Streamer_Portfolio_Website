function updateDotClickEvent() {
  var dots = document.getElementsByClassName('dot');
  var isPhoneWidth = window.innerWidth <= 600; // Assuming phone width is 600px or less
  
  for (var i = 0; i < dots.length; i++) {
    if (isPhoneWidth) {
      dots[i].onclick = null; // Remove the onclick event
    } else {
      (function(index){
        dots[i].onclick = function() {
          currentSlide(index + 1); // Reassign the onclick event (add 1 because index is 0-based and your slide numbers are 1-based)
        }
      })(i);
    }
  }
}

// Run on initial load
updateDotClickEvent();

// Run on resize
window.addEventListener('resize', updateDotClickEvent);
