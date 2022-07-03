const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    memberId: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
})

module.exports = mongoose.model('members', memberSchema);