// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
