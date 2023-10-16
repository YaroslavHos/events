const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  ignored: {
    type: Boolean,
    default: false
  },
  reported: {
    type: Boolean,
    default: false
  },
  severity: {
    type: String,
  }
})

module.exports= mongoose.model('Event', EventSchema)