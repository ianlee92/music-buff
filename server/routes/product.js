const express = require('express');
const router = express.Router();
const { Product } = require('../models/Product');

router.post('/products', (req, res) => {
    let term = req.body.searchTerm
    let findArgs = {};
    if (term) {
        Product.find(findArgs)
        .find({ $text: { $search: term }})
        //.populate("writer")
        .exec((err, productInfo) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({success:true, productInfo})
        })
    } else {
        Product.find(findArgs)
        //.populate("writer")
        .exec((err, productInfo) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({success:true, productInfo})
        })
    }
})

// axios.get(`/api/product/products_by_id?id=${productId}&type=single`)

router.get('/products_by_id', (req, res) => {
    let type = req.query.type
    let productIds = req.query.id

    if(type === "array") {
        let ids = req.query.id.split(',')
        productIds = ids.map(item => {
            return item
        })
    }

    Product.find({ _id: {$in: productIds} })
        //.populate('writer')
        .exec((err, product) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
})

module.exports = router;