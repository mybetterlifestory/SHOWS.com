const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    showId: {type: Number},
    name: {type: String},
    genres: {type: Array},
    status: {type: String},//Boolean
    premiered: {type: Date},
    ended: {type: Date},
    rating: {type: Array},   
    summary: {type: String},
    image: {type: Array},//Link?File?
})

//, { versionKey: false }

module.exports = mongoose.model('shows', showSchema);
