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
            label: ['Usual'],
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
    const title = req.body.title;
    const content = req.body.content;
    
    // Create post method in db
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
};
