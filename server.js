require("dotenv").config()
const express = require('express')
const mongoose = require("./db/connection")

const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

// get PORT from .env or use port 7777
const {PORT=7777} = process.env

const songsRouter = require('./controllers/songs')
app.get("/", (req,res) => res.send("hello world!"))
app.use("/songs", songsRouter)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))