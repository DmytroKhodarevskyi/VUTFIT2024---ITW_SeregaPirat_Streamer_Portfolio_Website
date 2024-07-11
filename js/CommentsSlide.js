function getSlideIndex() {
  var testimonials = document.getElementsByClassName("testimonial");
  var activeTestimonial = document.querySelector(".testimonial.active");

  return Array.from(testimonials).indexOf(activeTestimonial);

}

function currentSlide(n) {
  var testimonials = document.getElementsByClassName("testimonial");
  var dots = document.getElementsByClassName("dot");

  for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].className = testimonials[i].className.replace(" active", "");
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  testimonials[n - 1].className += " active";
  dots[n - 1].className += " active";
}

// Function to be called when swipe is detected
function onSwipe(direction) {
  var testimonials = document.getElementsByClassName("testimonial"); // Define testimonials here
  var currentIndex = getSlideIndex();
  if(direction === 'right') {
    currentIndex = (currentIndex > 0) ? currentIndex : testimonials.length;
  } else {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 2 : 1;
  }
  currentSlide(currentIndex);
}

// Adding event listeners to the testimonials container
var startX;
var testimonialsContainer = document.querySelector(".testimonial-container"); // Use querySelector to get the first element if there's only one

if (testimonialsContainer) {
  testimonialsContainer.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  }, false);

  testimonialsContainer.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Prevent scrolling when inside div
  }, false);

  testimonialsContainer.addEventListener('touchend', function(e) {
    var endX = e.changedTouches[0].clientX;
    if (endX > startX + 30) { // Swipe right
      onSwipe('right');
    } else if (endX < startX - 30) { // Swipe left
      onSwipe('left');
    }
  }, false);
}