
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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
