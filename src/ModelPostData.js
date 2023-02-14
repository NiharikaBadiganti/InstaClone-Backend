const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name : {type : String},
    location : {type : String},
    file : { type : String},
    description : {type : String},
    date : {type: String}
 })

const ModelPost = mongoose.model('posts',postSchema);
module.exports = ModelPost;