require("dotenv").config()
const mongoose = require('mongoose')

const {MONGODB_URI} = process.env
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
//connect
mongoose.connect(MONGODB_URI, config)

mongoose.connection
    .on("open", () => console.log("connected to mongo"))
    .on("closed", () => console.log("disconnected to mongo"))
    .on("error", (err) => console.log(err))

module.exports = mongoose