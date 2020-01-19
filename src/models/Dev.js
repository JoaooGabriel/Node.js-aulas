const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avarta_url: String,
    tches: [String],

});
module.exports = mongoose.model('Dev', DevSchema);