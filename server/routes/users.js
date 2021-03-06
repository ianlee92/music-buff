const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Payment } = require("../models/Payment");
const { auth } = require("../middleware/auth");
const async = require('async');

// role 1 어드민    role 2 특정 부서 어드민
// role 0 -> 일반유저   role 0이 아니면 관리자
router.get('/auth', auth, (req, res)=>{
    //여기 까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true 라는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
        cart: req.user.cart,
        history: req.user.history
    });
});

router.post('/register', (req, res) => {
    // 회원가입할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, doc)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

router.post('/login', (req, res)=>{
    // 요청한 이메일을 데이터베이스에 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }

        // 요청 이메일이 DB에 있다면 비밀번호가 맞는지 확인

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            // 비밀번호까지 맞다면 토큰을 생성
            user.generateToken((err, user)=>{
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
                res.cookie("w_authExp", user.tokenExp);
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess: true, userId: user._id})
            })
        })
    })
})

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id},
        { token: "", tokenExp: ""},
        (err, doc) => {
            if(err) return res.json({success: false, err});
            return res.status(200).send({
                success: true
            })
        })
})

router.post('/addToCart', auth, (req, res) => {
    User.findOne({ _id: req.user._id },
        (err, userInfo) => {
            let duplicate = false;
            userInfo.cart.forEach((item) => {
                if(item.id === req.body.productId) {
                    duplicate = true;
                }
            })

            if(duplicate) { // 이미 상품이 있을 때
                User.findOneAndUpdate(
                    { _id: req.user._id, "cart.id": req.body.productId },
                    { $inc : {"cart.$.quantity" : req.body.quantity} },
                    { new: true }, // 업데이트 정보
                    (err, userInfo) => {
                        if(err) return res.status(200).json({success:false, err})
                        res.status(200).send(userInfo.cart)
                    }
                )
            } else { // 해당 상품이 카트에 없을 때
                User.findOneAndUpdate(
                    {_id: req.user._id},
                    {
                        $push: {
                            cart: {
                                id: req.body.productId,
                                quantity: req.body.quantity,
                                date: Date.now()
                            }
                        }
                    },
                    { new: true },
                    (err, userInfo) => {
                        if(err) return res.status(400).json({success:false, err})
                        res.status(200).send(userInfo.cart)
                    }
                )
            }
        })

})

router.get('/removeFromCart', auth, (req,res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {
            "$pull":
                { "cart" : {"id": req.query.id}}
        },
        { new: true },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map(item => {
                return item.id
            })

            Product.find({ _id: { $in: array }})
            .populate('writer')
            .exec((err, productInfo) => {
                return res.status(200).json({productInfo, cart})
            })
        }
    )
})

router.post('/successBuy', auth, (req,res) => {
    let history= [];
    let transactionData = {};
    req.body.cartDetail.forEach((item) => {
        history.push({
            dateOfPurchase: Date.now(),
            name: item.title,
            id: item._id,
            price: item.price,
            quantity: item.quantity,
            paymentId: req.body.paymentData.paymentID
        })
    })

    transactionData.user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    transactionData.data = req.body.paymentData
    transactionData.product = history

    // history 정보 저장
    User.findOneAndUpdate(
        {_id: req.user._id},
        { $push: { history: history}, $set: {cart: []}}, // 카트비우기
        { new: true },
        (err, user) => {
            if(err) return res.json({ succeess: false, err })

            // payment에다가 transactionData 정보 저장
            const payment = new Payment(transactionData)
            payment.save((err, doc) => {
                if(err) return res.json({ success: false, err })

                let products = [];
                doc.product.forEach(item => {
                    products.push( {id:item.id, quantity: item.quantity})
                })
                async.eachSeries(products, (item, callback) => {
                    Product.update(
                        {id:item.id},
                        {$inc:{
                            "sold" : item.quantity
                        }},
                        {new:false},
                        callback
                    )
                }, (err) => {
                    if(err) return res.status(400).json({success: false, err})
                    res.status(200).json({
                        success: true,
                        cart: user.cart,
                        cartDetail: []
                })
                })
            })
        }
    )
})

module.exports = router;
