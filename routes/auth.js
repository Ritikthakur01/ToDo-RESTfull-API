const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

// Register a new user
router.post('/register', (req, res) => {
    try {
        const { username, password } = req.body;

        const newUser = new User({ username, password });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;
                newUser.save()
                    .then((user) => res.json({
                        message: "User created successfully",
                        user: user
                    }))
                    .catch((err) => res.status(400).send('Failed to register user.'));
            });
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
});

// Log in user and return JWT
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        await User.findOne({ username })
            .then((user) => {
                if (!user) return res.status(404).send('User not found.');

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (!isMatch) return res.status(400).send('Invalid password.');

                    const token = jwt.sign({ _id: user._id }, 'your-secret-key');
                    res.header('Authorization', token).json({ message:"Login successfully", token });
                });
            })
            .catch((err) => res.status(400).send('Failed to log in.'));
    }
    catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
