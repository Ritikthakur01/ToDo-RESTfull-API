const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require("./configs/mongoose")
const jwt = require("./configs/jwt")

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/auth', require('./routes/auth'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
