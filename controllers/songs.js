const Song = require('../models/song')
const {Router} = require('express')
const router = Router()
const seedData = require('../db/songs.json')

// seed
router.get("/seed", async(req,res) => {
    try{
        await Song.deleteMany({})
        const seed = await Song.insertMany(seedData)
        res.json({
            status: 200,
            data: seed
        })
    }catch(err){console.log('error: ', err)}
})

// index
router.get("/", async (req,res) => {
    try{
        const songs = await Song.find({})
        res.json({
            status: 200,
            data: songs
        })
    }catch(err){
        res.status(400).json(err)
    }
})
// show
router.get("/:id", async (req,res) => {
    try{
        const song = await Song.findById(req.params.id)
        res.json({
            status: 200,
            data: song
        })
    }catch(err){
        res.status(400).json(err)
    }
})
// create
router.post("/", async (req,res) => {
    try{
        const newSong = await Song.create(req.body)
        res.json({
            status: 200,
            data: newSong
        })
    }catch(err){
        res.status(400).json(err)
    }
})
// update
router.put("/:id", async (req,res) => {
    try{
        const updated = await Song.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({
            status: 200,
            data: updated
        })
    }catch(err){
        res.status(400).json(err)
    }
})
// destroy
router.delete("/:id", async (req,res) => {
    try{
        const deleted = await Song.findByIdAndDelete(req.params.id)
        res.json({
            status: 200,
            data: deleted
        })
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router