const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    memberId: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    shows: [
        { showId: Number, name: String, date: Date}
    ]
})

module.exports = mongoose.model('subscriptions', subscriptionSchema);

