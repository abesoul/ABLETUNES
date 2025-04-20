document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Save user credentials (simplified for demonstration)
  localStorage.setItem('user', JSON.stringify({ email, password }));
  alert('Account created successfully!');
  window.location.href = 'login.html';
});
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Handle registration logic (e.g., save new user)
    console.log('New user registered:', newUsername);
});
