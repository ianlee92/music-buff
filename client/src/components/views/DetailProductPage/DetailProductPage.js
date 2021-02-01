import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './DetailProductPage.scss';
import QandA from '../../Util/QandA';

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
                        <div class="cartDiv">
                        <span class="cartButton"><button class="cartBtn" type="button">구매하기</button></span>
                        <span class="cartButton"><button class="cartBtn2" type="button">장바구니에 담기</button></span>
                        </div>
                        <div class="productDescriptionSubject"><span class="productDescriptionTitle">상세정보</span></div>
                        <div class="productDescription">{detailProduct[0].description}</div>
                    </div>
                    <div class="deliveryDescription">
                        <hr class="descriptionHr"></hr><br /><br /><br />
                        ☀︎ 배송기간<br />
                        <span class="subDescription"><br />
                        ・  주문 제작 제품으로 영업일 기준 배송완료까지 7일 정도 소요됩니다.<br /><br />
                        </span><br />
                        ☀︎ 구매 시 주의사항<br /><br />
                        <span class="subDescription">
                        ・ 제품 사용에 문제가 있을 경우 교환/환불해드립니다.<br />
                        ・ 주문 제작 제품으로 단순 변심에 의한 교환/환불은 불가합니다.<br />
                        ・ 모니터의 사양에 따라 컬러가 상이할 수 있습니다.<br />
                        </span>
                        <br /><br />
                        ☀︎ 반품/교환 안내<br /><br />
                        <span class="subDescription">
                        ・ 반품배송비 : 편도 3000원<br />
                        ・ 교환배송비 : 6000원<br />
                        </span>
                        <br /><br />
                        ☀︎ 반품/교환 사유에 따른 요청 가능 기간<br /><br />
                        <span class="subDescription">
                        ・ 상품하자의 경우 상품 수령 후 5일 이내 (판매자 반품배송비 부담)</span><br />
                        <br /><br />
                        ☀︎ 반품/교환 불가능 사유<br /><br />
                        <span class="subDescription">
                        ・ 반품요청기간이 지난 경우<br />
                        ・ 구매자의 책임 있는 사유로 상품 등이 훼손된 경우 (상품의 내용을 확인하기 위하여 포장을 훼손한 경우는 제외)<br />
                        ・ 구매자의 사용에 의하여 상품의 가치가 감소한 경우<br />
                        ・ 시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 감소한 경우<br />
                        ・ 고객주문 확인 후 상품제작에 들어가는 주문제작상품</span><br />
                    </div>
                    <QandA />
                </div>
            </div>
            <div class="product-detail-end"></div>
        </div>
    )
}

export default DetailProductPage
