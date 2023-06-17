// require module
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// create a task
router.post('/', (req, res) => {

    const { title, description, status } = req.body;

    const newTask = new Task({
        title,
        description,
        status
    });
    newTask.save().then((task) => {
        res.status(201).json(task);
    })
        .catch((error) => {
            res.status(500).json('Error creating task');
            console.log(error)
        });
});

// Read all tasks
router.get('/', (req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((error) => {
            res.status(500).json('Error retrieving tasks');
            console.log(error)
        });
})

// update a task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    Task.findByIdAndUpdate(id, {
        title,
        description,
        status
    }, { new: true })

    // Task.findById(id)
        .then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        })
        .catch((error) => {
            res.status(500).json('Error updating task');
            console.log(error)
        })
});

// Delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Task.findByIdAndRemove(id)
    Task.find()
        .then((task) => {
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json('message: Task deleted successfully');
        })
        .catch((error) => {
            res.status(500).json('Error deleting task');
            console.log(error)
        });
});

// exporting modules
module.exports = router;