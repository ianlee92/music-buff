import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../_actions/user_action';
import axios from 'axios';
import './DetailProductPage.scss';
import QandA from '../../Util/QandA';
import { withRouter } from 'react-router-dom';
import Cart from '../../Util/Cart';

function DetailProductPage(props) {

    const productId = props.match.params.productId

    const [Product, setProduct] = useState([])
    // useEffect(() => {
    //     axios.post('/api/product/products')
    //         .then(response => {
    //             if(response.data.success){
    //                 setProduct(response.data.productInfo)
    //             } else {
    //                 alert("상품들을 가져오는데 실패 했습니다.")
    //             }
    //         })
    // }, [])

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])

    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(Product.length>0 && Product[0]._id));
        props.history.push('/user/cart')
    }

    return (
        <div className="productContentDetail">
            <div className="product-detail-start"></div>
            <div className="product-detail-Wrap">
                <div className="productDetailWrapper">
                    <div className="detailThumbDiv">
                        <div className="detailThumbImg">
                            <img className="detailImgSize" src={Product.images} alt="product"/>
                        </div>
                    </div>
                    <div className="productDetailInfo">
                        <div className="productDetailName">{Product.title}</div>
                        <div className="productDetailPrice"><span className="proudctDetailPriceSpan">{Product.price}원</span></div>
                        <div className="delivery"><span className="productDescriptionTitle">배송비</span><span className="deliverySub">3,000원 (50,000원 이상 구매 시 무료)</span></div>
                        <div className="count"><span className="productDescriptionTitle">수량</span></div>
                        <div className="countButton">
                            <button type="button">+</button>
                            <input type="number" min="1" value="1" readOnly="readonly"/>
                            <button type="button">-</button>
                        </div>
                        <Cart detail={Product}/>
                        <div className="productDescriptionSubject"><span className="productDescriptionTitle">상세정보</span></div>
                        <div className="productDescription">{Product.description}</div>
                    </div>
                    <div className="deliveryDescription">
                        <hr className="descriptionHr"></hr><br /><br /><br />
                        ☀︎ 배송기간<br />
                        <span className="subDescription"><br />
                        ・  주문 제작 제품으로 영업일 기준 배송완료까지 7일 정도 소요됩니다.<br /><br />
                        </span><br />
                        ☀︎ 구매 시 주의사항<br /><br />
                        <span className="subDescription">
                        ・ 제품 사용에 문제가 있을 경우 교환/환불해드립니다.<br />
                        ・ 주문 제작 제품으로 단순 변심에 의한 교환/환불은 불가합니다.<br />
                        ・ 모니터의 사양에 따라 컬러가 상이할 수 있습니다.<br />
                        </span>
                        <br /><br />
                        ☀︎ 반품/교환 안내<br /><br />
                        <span className="subDescription">
                        ・ 반품배송비 : 편도 3000원<br />
                        ・ 교환배송비 : 6000원<br />
                        </span>
                        <br /><br />
                        ☀︎ 반품/교환 사유에 따른 요청 가능 기간<br /><br />
                        <span className="subDescription">
                        ・ 상품하자의 경우 상품 수령 후 5일 이내 (판매자 반품배송비 부담)</span><br />
                        <br /><br />
                        ☀︎ 반품/교환 불가능 사유<br /><br />
                        <span className="subDescription">
                        ・ 반품요청기간이 지난 경우<br />
                        ・ 구매자의 책임 있는 사유로 상품 등이 훼손된 경우 (상품의 내용을 확인하기 위하여 포장을 훼손한 경우는 제외)<br />
                        ・ 구매자의 사용에 의하여 상품의 가치가 감소한 경우<br />
                        ・ 시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 감소한 경우<br />
                        ・ 고객주문 확인 후 상품제작에 들어가는 주문제작상품</span><br />
                    </div>
                    <QandA />
                </div>
            </div>
            <div className="product-detail-end"></div>
        </div>
    )
}

export default withRouter(DetailProductPage);
