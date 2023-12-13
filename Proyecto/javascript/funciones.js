
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Captura la barra de navegación
var navbar = document.querySelector('.navbar');

// Captura la posición inicial de la barra de navegación


// Función que se ejecuta al hacer scroll
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

// Registra el evento de scroll y llama a la función
window.onscroll = function() {
  stickyNavbar();
};


function toggleReadMore() {
    var extraContent = document.querySelector('.extra-content');
    var readMoreBtn = document.getElementById('readMoreBtn');

    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = "block";
        readMoreBtn.textContent = "Read less";
    } else {
        extraContent.style.display = "none";
        readMoreBtn.textContent = "Read more";
    }
}
