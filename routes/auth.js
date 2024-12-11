const express = require('express');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const db = require('../config/db');

const router = express.Router();

// API đăng nhập
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Mã hóa password bằng MD5
  const hashedPassword = md5(password);

  // Kiểm tra thông tin đăng nhập trong cơ sở dữ liệu
  const query = 'SELECT * FROM User WHERE UserName = ? AND Password = ?';
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      // Tạo token nếu đăng nhập thành công
      const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
      return res.json({ message: 'Login successful', token });
    } else {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

// API kiểm tra token và in "Hello World"
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

module.exports = router;
