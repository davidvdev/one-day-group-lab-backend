const mongoose = require('./connection')
const seedData = require('./songs.json')
const Song = require('../models/song')

try{
    Song.deleteMany({}).then(() => {
        Song.insertMany(seedData)
        .then((songs) => {
            console.log('songs added: ', songs)
            mongoose.connection.close()
        })
    })
}catch(err){console.log('error: ', err)}