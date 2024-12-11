const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const verifyToken = require('./middleware/verifyToken');

const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(bodyParser.json());

// Routes
app.use('/auth', authRouter);

// Route in "Hello World" có middleware xác thực token
app.get('/hello', verifyToken, (req, res) => {
  res.json({ message: `HelloWorld` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
