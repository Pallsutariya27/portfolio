// You can add some interactive features with JavaScript
// For example, form validation or animations

// Simple form validation for the contact form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (!name || !email || !message) {
    event.preventDefault();
    alert('Please fill out all fields.');
  } else {
    alert('Message sent! I will get back to you shortly.');
  }
});
