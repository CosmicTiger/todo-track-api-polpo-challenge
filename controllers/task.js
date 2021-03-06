const { validationResult } = require('express-validator');

const Task = require('../models/task');
const User = require('../models/user');

exports.getTasks = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = 2;
    let totalItems;
    Task.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Task.find()
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        })
        .then(tasks => {
            res.status(200).json({ message: 'Fetched tasks successfully.', tasks: tasks, totalItems: totalItems })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createTasks = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const title = req.body.title;
    const comments = req.body.comments; // This is comments
    const inbox = req.body.inbox;
    const getDoneAt = req.body.getDoneAt;
    const deadline = req.body.deadline;
    const labels = req.body.labels;
    const priority = req.body.priority;
    const isReminded = req.body.isReminded;
    let userPropietary;

    // Create post method in db
    const task = new Task({
        title: title,
        comments: comments,
        inbox: inbox,
        getDoneAt: getDoneAt,
        deadline: deadline,
        labels: labels,
        priority: priority,
        isReminded: isReminded,
        user: req.userId
    });

    task
        .save()
        .then(result => {
            return User.findById(req.userId);
        })
        .then(user => {
            userPropietary = user;
            user.tasks.push(task);
            return user.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'Post created successfully!',
                task: task,
                userPropietary: { _id: userPropietary._id, name: userPropietary.name }
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.findTask = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.findById(taskId)
        .then(task => {
            if (!task) {
                const error = new Error('Could not find task.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Task fetched.', task: task });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.updateTask = (req, res, next) => {
    const taskId = req.params.taskId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    if (post.userPropietary.toString() == req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
    }
    const title = req.body.title;
    const comments = req.body.comments; // This is comments
    const inbox = req.body.inbox;
    const getDoneAt = req.body.getDoneAt;
    const deadline = req.body.deadline;
    const labels = req.body.labels;
    const priority = req.body.priority;
    const isReminded = req.body.isReminded;

    Task.findById(taskId)
        .then(task => {
            if (!task) {
                const error = new Error('Could not find task.');
                error.statusCode = 404;
                throw error;
            }

            task.title = title;
            task.comments = comments;
            task.inbox = inbox;
            task.getDoneAt = getDoneAt;
            task.deadline = deadline;
            task.labels = labels;
            task.priority = priority;
            task.isReminded = isReminded;

            return task.save();
        })
        .then(result => {
            res.status(200).json({ message: 'Task Updated!', task: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

    // Create post method in db
    const task = new Task({
        title: title,
        comments: comments,
        inbox: inbox,
        getDoneAt: getDoneAt,
        deadline: deadline,
        labels: labels,
        priority: priority,
        isReminded: isReminded,
    });

    task
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Post created successfully!',
                task: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteTask = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.findById(taskId)
        .then(task => {
            if (!task) {
                const error = new Error('Could not find task.');
                error.statusCode = 404;
                throw error;
            }

            return Task.findByIdAndRemove(taskId);
        })
        .then(result => {
            return User.findById(req.userId);
        })
        .then(user => {
            user.tasks.pull(taskId);
            return user.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'Deleted task.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}
