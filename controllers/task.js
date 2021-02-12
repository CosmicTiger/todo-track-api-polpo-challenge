exports.getTasks = (req, res, next) => {
    res.json({
        tasks: [{ title: 'First Task', content: 'This is the first task!' }]
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
