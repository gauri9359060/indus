const mongoose = require('mongoose')

const emoji = mongoose.Schema({
    "text" : {type:String, required:true}
})

module.exports = mongoose.model('emoji',emoji)