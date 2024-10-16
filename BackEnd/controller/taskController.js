const { ValidateTask, Task } = require("../models/task")

exports.AddTodo = async (req,res) => {
    const Validate = ValidateTask.safeParse(req.body);

    if (!Validate.success) {
        return res.status(400).json({ 
            message: 'Invalid Input',
            error: Validate.error.errors
        });
    }
    const { title , description , status } = Validate.data;
    try {
        const userId = req.user.userId;
        const newTask = await Task.create({ title, description, status, user: userId});
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch(error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

exports.GetTodo = async (req,res) => {
    const userId = req.user.userId;

    try {
        const Todo = await Task.find({ user: userId });
        res.status(200).json({ tasks: Todo });
    } catch(error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

exports.UpdateTodo = async (req,res) => {
    const Validate = ValidateTask.safeParse(req.body);

    if (!Validate.success) {
        return res.status(400).json({ 
            message: 'Invalid Input',
            error: Validate.error.errors
        });
    }
    const { title , description , status } = Validate.data;
    const taskId = req.params.taskId;
    try {
        const UpdatedTodo = await Task.findOneAndUpdate(
            { user: req.user.userId , _id: taskId },
            { title , description , status },
            { new: true}
        )

        if (!UpdatedTodo) {
            return res.status(404).json({ message: 'Task not found '});
        }
        return res.status(200).json({ message: 'Task updated successfully', task: UpdatedTodo });
    } catch(error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

exports.DeleteTodo = async (req,res) => {
    const userId = req.user.userId;
    const taskId = req.params.taskId;

    try {
        const deleteTodo = await Task.findOneAndDelete({ user: userId, _id: taskId});
        if (!deleteTodo) {
            return res.status(404).json({ message: 'Task not found '});
        }
        return res.status(200).json({ message: 'Task deleted '});
    } catch(error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
} 