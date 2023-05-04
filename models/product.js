const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    add_time:{
        type: Date,
        default: Date.now
    },
    id:{
        type: String,
        required: true,
        unique: true
    },
    poster:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    download_link:{
        type: String,
        required: true,
        trim: true
    }
    
} )

// new collection
const product = new mongoose.model("moviesURL2", productSchema)

module.exports = product