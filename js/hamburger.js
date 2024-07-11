function toggleMenu() {
  var menu = document.getElementById('menu');
  var hamburger = document.querySelector('.hamburger-menu');

  // hamburger.classList.toggle('change');
  hamburger.classList.add('change'); 
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    return;
  }
  // menu.classList.toggle('show-menu');
  menu.classList.add('show-menu'); 

}

document.getElementById('menuButton').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
    menu.style.animation = 'slideDown 0.3s ease';
  } else {
    // Hide the menu with some kind of animation
    menu.style.animation = 'slideUp 0.3s ease'; // Define slideUp animation in your CSS
    setTimeout(function() {
      menu.style.display = 'none';
    }, 300); // Assume the animation takes 500ms to complete
  }
});

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop){
    // Scrolling Down

    document.querySelector('.hamburger-menu').classList.add('hidden');
    var menu = document.getElementById('menu');
    if (!(menu.style.display === 'none' || menu.style.display === '')) {
      var hamburger = document.querySelector('.hamburger-menu');
      hamburger.classList.remove('change');
      
      menu.style.animation = 'slideUp 0.3s ease'; // Define slideUp animation in your CSS
    setTimeout(function() {
      menu.style.display = 'none';
    }, 300);
    }
  } else {
    // Scrolling Up
    document.querySelector('.hamburger-menu').classList.remove('hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

