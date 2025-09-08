// 1. Counter Button – tracks click count
const counterBtn = document.getElementById('counterBtn');
let clickCount = 0;
counterBtn.addEventListener('click', () => {
  clickCount++;
  counterBtn.textContent = `Clicked ${clickCount} times`;
});

// 2. Background Color Changer – toggles page background
const colorBtn = document.getElementById('colorBtn');
let isOriginal = true;
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = isOriginal ? '#e0f7fa' : '';
  isOriginal = !isOriginal;
});

// 3. Custom Form Validation – intercepts submission
const form = document.getElementById('signupForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop submission for validation

  // Reset error and success messages
  document.getElementById('userError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let formValid = true;

  // Validate username
  if (username.length < 3) {
    document.getElementById('userError').textContent = 'Username must be at least 3 characters.';
    formValid = false;
  }

  // Validate email (simple regex)
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    formValid = false;
  }

  // Validate password complexity
  if (password.length < 6 || !/[0-9]/.test(password)) {
    document.getElementById('passError').textContent = 'Password must be 6+ chars with a number.';
    formValid = false;
  }

  if (formValid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    form.reset();
    clickCount = 0; // optional: reset interactive state
    counterBtn.textContent = 'Clicked 0 times';
    isOriginal = true;
    document.body.style.backgroundColor = '';
  }
});
