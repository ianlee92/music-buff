const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sort: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    kind: {
        type: String,
        maxlength: 50
    }
}, { timestamps: true });


productSchema.index({
    title:'text',
    description:'text'
}, {
    weights:{
        title: 5, // title 5배 더 중요시 여겨서 검색을함
        description: 1
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = {Product}