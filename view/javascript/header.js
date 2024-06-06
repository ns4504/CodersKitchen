 const images1 = [
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2", alt: "Delicious pasta dish"},
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", alt: "Juicy cheeseburger with lettuce"},
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", alt: "Healthy salad"}
];
const images2 = [
  { src: "https://images.unsplash.com/photo-1543353071-873f17a7a088", alt: "Freshly baked bread"},
  { src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9", alt: "Assortment of baked goods on a table"},
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", alt: "Chef preparing food"}
];
const images3 = [
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Delicious pasta dish"},
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "cake"},
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Healthy salad"}
];

function populateSlides(images, containerId) {
  const container = document.getElementById(containerId);
  images.forEach(image => {
    let slide = document.createElement('div');
    slide.className = 'mySlides';
    let img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    slide.appendChild(img);
    container.appendChild(slide);
  });
}

function showSlides(containerId) {
  let slides = document.querySelectorAll(`#${containerId} .mySlides`);
  let slideIndex = 0;
  function displayNextSlide() {
    for (let slide of slides) {
      slide.style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    setTimeout(displayNextSlide, 9000); // Change slide every 9 seconds
  }
  displayNextSlide();
}

populateSlides(images1, 'slideshow-container1');
populateSlides(images2, 'slideshow-container2');
populateSlides(images3, 'slideshow-container3');

showSlides('slideshow-container1');
showSlides('slideshow-container2');
showSlides('slideshow-container3');
