const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const qandaSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }
}, { timestamps: true });


const QandA = mongoose.model('QandA', qandaSchema)

module.exports = {QandA}