const header = document.getElementsByTagName("header")[0];
const logo = document.getElementById('start-logo');


window.addEventListener("scroll", function() {
  const sections = Array.from(document.querySelectorAll('section'));
  const carouselImages = document.querySelectorAll(".carousel-image");
  const rects = sections.map(section => section.getBoundingClientRect());
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = rects[i];
  
    if (rect.top < window.innerHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
  
  carouselImages.forEach(image => {
    image.style.???=???;
  })
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
