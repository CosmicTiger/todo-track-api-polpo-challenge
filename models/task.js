const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: false
    },
    inbox: {
        type: String,
        required: true
    },
    getDoneAt: {
        type: String,
        required: false
    },
    deadline: {
        type: String,
        required: false
    },
    labels: {
        type: Array,
        required: false
    },
    priority: {
        type: Number,
        required: false
    },
    isReminded: {
        type: Object,
        required: false
    },
    userPropietary: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
