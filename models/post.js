var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
    title: String,
    author: String,
    content: String,
    date: {type: Date, default: Date.now}

});

module.exports = mongoose.model('PostSchema', Post);
