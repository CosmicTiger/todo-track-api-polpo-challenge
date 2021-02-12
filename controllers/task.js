const { validationResult } = require('express-validator');

exports.getTasks = (req, res, next) => {
    let date = new Date();

    res.json({
        tasks: [{
            _id: '1',
            title: 'First Task',
            comments: [ 'This is the first task!', 'This is a test' ],
            inbox: 'To Do',
            createdAt: date,
            getDoneAt: date,
            deadline: date.getHours() + ':' + date.getMinutes(),
            labels: ['Usual'],
            priority: 1,
            isReminded: {
                verification: false,
                frequency: 0
            },
            user: {
                name: 'nataliamartinez'
            }
        }]
    });
};

exports.createTasks = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .json({
                message: 'Validation failed, entered data is incorrect.',
                errors: errors.array()
            });
    }

    const title = req.body.title;
    const comments = req.body.comments; // This is comments
    const inbox = req.body.inbox;
    const getDoneAt = req.body.getDoneAt;
    const deadline = req.body.deadline;
    const labels = req.body.labels;
    const priority = req.body.priority;
    const isReminded = req.body.isReminded;
    const user = req.body.user;
    let date = new Date();

    // Create post method in db
    res.status(201).json({
        message: 'Post created successfully!',
        task: {
            _id: new Date().toISOString(),
            title: title,
            comments: comments,
            inbox: inbox,
            createdAt: date,
            getDoneAt: getDoneAt,
            deadline: deadline,
            labels: labels,
            priority: priority,
            isReminded: isReminded,
            user: user
        }
    });
};
