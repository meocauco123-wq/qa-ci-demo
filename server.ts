import express from 'express';

const app = express();
app.use(express.json());

// homepage
app.get('/', (req, res) => {
  res.send('<h1>Server is running</h1>');
});

// login page
app.get('/login', (req, res) => {
  res.send(`
    <h2>Login Page</h2>

    <input id="username" />
    <input id="password" type="password" />
    <button id="login-button">Login</button>

    <p class="error-message" style="color:red"></p>

    <script>
      document.getElementById('login-button').onclick = () => {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        const errorEl = document.querySelector('.error-message');

        if (user === 'testuser' && pass === 'password123') {
          window.location.href = '/dashboard';
        } else {
          errorEl.textContent = 'Login failed';
        }
      }
    </script>
  `);
});

// dashboard
app.get('/dashboard', (req, res) => {
  res.send('<h1>Dashboard</h1>');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});