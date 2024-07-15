const mongoose = require(`mongoose`)
const { stringify } = require("uuid")

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model(`myVideos`, videoSchema)