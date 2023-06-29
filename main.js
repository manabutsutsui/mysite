'use strict';
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


let observer = new IntersectionObserver((entries, observer) => { 
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      }
  });
});

let targets = document.querySelectorAll('.fade-in-section');
targets.forEach(target => {
  observer.observe(target);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

