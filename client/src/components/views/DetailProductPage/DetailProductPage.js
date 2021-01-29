import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './DetailProductPage.scss';

function DetailProductPage(props) {
    const productId = props.match.params.productId

    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.post('/api/product/products')
            .then(response => {
                if(response.data.success){
                    setProduct(response.data.productInfo)
                } else {
                    alert("상품들을 가져오는데 실패 했습니다.")
                }
            })
    }, [])

        // console.log(response.data)
        // if(response.data.success && Product.length > 0 {
        //     let detailProduct = Product.filter(product => (product._id === productId))

        // })
        
    const detailProduct = Product.filter(product => (product._id === productId))

    console.log(detailProduct.length>0 && detailProduct)

    return detailProduct.length>0 && (
        <div class="productContentDetail">
            <div class="product-detail-start"></div>
            <div class="product-detail-Wrap">
                <div class="productDetailWrapper">
                    <div class="detailThumbDiv">
                        <div class="detailThumbImg">
                            <img class="detailImgSize" src={detailProduct[0].images[0]} />
                        </div>
                    </div>
                    <div class="productDetailInfo">
                        <div class="productDetailName">{detailProduct[0].title}</div>
                        <div class="productDetailPrice"><span class="proudctDetailPriceSpan">{detailProduct[0].price}원</span></div>
                        <div class="delivery"><span class="productDescriptionTitle">배송비</span><span class="deliverySub">3,000원 (50,000원 이상 구매 시 무료)</span></div>
                        <div class="count"><span class="productDescriptionTitle">수량</span></div>
                        <div class="countButton">
                            <button type="button">+</button>
                            <input type="number" min="1" value="1" readOnly="readonly"/>
                            <button type="button">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-detail-end"></div>
        </div>
    )
}

export default DetailProductPage
