const express = require('express');
const mysql = require('mysql2');
const { userInfo } = require('os');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Node.js + MySQL running in Docker!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});