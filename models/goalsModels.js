const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema({
  name : {
    type: String,
    required: [true, 'Please add a text value'],
}
    
}, {timestamps:true})

const Goal = mongoose.model('Goal', goalSchema)

module.exports={
  Goal
}
