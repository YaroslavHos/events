const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    id: {
        type: Number
    },
    ignored: {
        type: Boolean
    },
    reported: {
        type: Boolean
    },
    severity: {
        type: String
    },
    id: Number
})

module.exports= mongoose.model('Event', EventSchema)