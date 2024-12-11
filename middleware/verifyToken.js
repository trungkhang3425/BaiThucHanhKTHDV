const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
      return res.status(403).json({ message: 'Token is required' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
      return res.status(403).json({ message: 'Token is required' });
  }

  try {
      const decoded = jwt.verify(token, 'secretKey');
      req.user = decoded;
      next();
  } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
