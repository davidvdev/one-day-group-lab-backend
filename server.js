require("dotenv").config()
const express = require('express')
const mongoose = require("./db/connection")

const morgan = require("morgan")
const cors = require("cors")
const app = express()

// get PORT from .env or use port 7777
const {PORT=7777} = process.env

app.get("/", (req,res) => res.send("hello world!"))

app.listen(PORT, () => console.log(`server listening on ${PORT}`))