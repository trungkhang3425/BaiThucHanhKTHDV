const mysql = require('mysql2');

// Kết nối tới cơ sở dữ liệu
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678', // Đổi thành mật khẩu của bạn
  database: 'kthdv'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = db;
