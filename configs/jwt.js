const jwt = require('jsonwebtoken');
const Task = require("../models/tasks")

// Middleware for authenticating JWT
exports.authenticateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send('No token provided.');
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(403).send('Token expired.');
        }
        return res.status(403).send('Invalid token.');
      }
      req.user = user;
      next();
    });
  }
  catch (err) {
    return res.status(500).send(err);
  }
};

// Middleware for authorizing the user
exports.authorizeUser = async (req, res, next) => {
  try {
    const taskId = req.params.id;

    await Task.findById(taskId)
    .then((task)=>{
      if (!task) return res.status(404).send('Task not found.');

      if (task.user.toString() !== req.user._id) {
        return res.status(403).send('Access denied.');
      }
      next();
    })
    .catch((err)=>res.status(500).send('Server error.'))
      
    }
  catch (err) {
    return res.status(500).send(err);
  }
};
