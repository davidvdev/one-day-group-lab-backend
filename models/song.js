const mongoose = require('mongoose')
const {Schema, model} = mongoose

const songSchema = new Schema (
    {
        "title": {type: String, require:true},
        "artist": {type: String, require:true},
        "time": {type: String, require:true},
        "favorite": {type: Boolean, default:false}
    }
)

const Song = model("Song", songSchema)

module.exports = Song