
const typingElement = document.getElementById('typing-text');
const text = "Hemandra Singh";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 250);
  }
}

typeText();

const toggleButton = document.querySelector('.toggle-dark-mode');
const contentElement = document.getElementById('content');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Dark Mode';
    contentElement.style.display = 'none';
  } else {
    toggleButton.textContent = 'Light Mode';
    contentElement.style.display = 'block';
  }
});

window.onload = function() {
  setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.querySelector(".content").style.display = "block";
  }, 2000); // Loader duration (2 seconds)
};

let currentIndex = 0;
const slides = document.querySelector(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);




