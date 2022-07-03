const mongoose = require('mongoose');

const usersShema = new mongoose.Schema({
    userId: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    role: {type: String},
    email: {type: String, unique: true},
    password: {type: String}
})

module.exports = mongoose.model('users', usersShema);


