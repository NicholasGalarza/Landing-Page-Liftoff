const header = document.getElementsByTagName("header")[0];
const logo = document.getElementById('start-logo');


window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 65) header.classList.add("active");
  else header.classList.remove('active');
});

let counter = 0;
const pictures = document.querySelectorAll('.carousel-image');

setInterval(() => {
  if (counter < 3) {
    pictures[counter].classList.add('hidden');
    pictures[++counter].classList.remove('hidden');
  }

  else if (counter === pictures.length-1) {
    pictures[counter].classList.add('hidden');
    counter = 0;
    pictures[counter].classList.remove('hidden');
  }
}, 5000);
