const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const { authenticateJWT, authorizeUser } = require('../configs/jwt');

// Get all tasks
router.get('/', authenticateJWT, (req, res) => {
    try {
        Task.find({ user: req.user._id })
            .then((tasks) => res.json({message:"All Tasks",tasks}))
            .catch((err) => res.status(500).send('Server error.'));
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// Create a new task
router.post('/', authenticateJWT, (req, res) => {
    try {
        const { name, description, status } = req.body;

        const newTask = new Task({
            name,
            description,
            status,
            user: req.user._id,
        });

        newTask.save()
            .then((task) => res.json({message:"Task added",task}))
            .catch((err) => res.status(400).send('Failed to create task.'));
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a task
router.put('/:id', [authenticateJWT, authorizeUser], async (req, res) => {
    try {
        const { name, description, status } = req.body;
        await Task.findByIdAndUpdate(req.params.id, { name, description, status }, { new: true })
            .then((task) => {
                if (!task) return res.status(404).send('Task not found.');
                res.json({message:"Task updated",task});
            })
            .catch((err) => res.status(400).send('Failed to update task.'));
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// Delete a task
router.delete('/:id', [authenticateJWT, authorizeUser], (req, res) => {
    try{
        Task.findByIdAndRemove(req.params.id)
        .then((task) => {
            if (!task) return res.status(404).send('Task not found.');
            res.json({message:"Task deleted",task});
        })
        .catch((err) => res.status(400).send('Failed to delete task.'));
    }
    catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;
