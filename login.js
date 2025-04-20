document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check credentials (simplified for demonstration)
  if (email === 'user@example.com' && password === 'password123') {
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials, please try again.');
  }
});
