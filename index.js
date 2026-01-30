require('dotenv').config();
const express = require('express');
const basicAuth = require('basic-auth');

const app = express();
const PORT = process.env.PORT || 3000;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const SECRET_MESSAGE = process.env.SECRET_MESSAGE;

// 🔍 TEMP DEBUG (important)
console.log('USERNAME:', USERNAME);
console.log('PASSWORD:', PASSWORD);
console.log('SECRET_MESSAGE:', SECRET_MESSAGE);

function auth(req, res, next) {
  const user = basicAuth(req);

  if (!user) {
    res.set('WWW-Authenticate', 'Basic realm="Secret Area"');
    return res.status(401).send('Authentication required');
  }

  if (user.name !== USERNAME || user.pass !== PASSWORD) {
    res.set('WWW-Authenticate', 'Basic realm="Secret Area"');
    return res.status(401).send('Invalid username or password');
  }

  next();
}

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/secret', auth, (req, res) => {
  res.send(SECRET_MESSAGE);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

