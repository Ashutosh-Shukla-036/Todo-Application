const mongoose = require('mongoose');
const { z } = require('zod')

const ValidateTask = z.object({
    title: z.string().min(1,{message: 'Title is required'}),
    description: z.string().min(1,{message: 'Description is required'}),
    status: z.enum(['pending','in-progress','completed'], {message: 'Status should be in pending, in-progess or completed state'})
});

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
});

const Task = mongoose.model('Task',taskSchema); 

module.exports = {
    ValidateTask,
    Task
};