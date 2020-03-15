const mongoose = require('mongoose')
//const validator = require('validator')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    description:{
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    imagepath:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        default:0
    },
    rating:{
        type: Number,
        default:0,
    },
    category:{
        name: String,
        parent: {
            parentcategory: String,
            subcategory: String
        }
    },
    supplier:{
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    status:{
        type: Boolean,
        default: true
    },
    createdat:{
        type: Date,
        default: Date.now
    },
    updatedat:{
        type:Date
    }
});

const Product = mongoose.model('product', productSchema)

module.exports = Product