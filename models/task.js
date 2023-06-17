// require models
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    status: {type: String, enum: ['Todo', 'In Progress', 'Completed'], default: 'Todo'},
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

// export module
module.exports = Task;