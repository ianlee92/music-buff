import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './DetailProductPage.scss';
import QandA from './Sections/QandA';
import Description from './Sections/Description'
import { withRouter } from 'react-router-dom';
import Cart from './Sections/Cart';

function DetailProductPage(props) {

    const productId = props.match.params.productId

    const [Product, setProduct] = useState([])
    const [Quantity, setQuantity] = useState(1)
    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])
    
    
    const addHandler = () => {
        setQuantity(Quantity+1);
    }
    const minusHandler = () => {
        setQuantity(Quantity-1);
    }

    const quantityHandler = (event) => {
        setQuantity(event.currentTarget.value)
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
                        <div className="productDetailPrice"><span className="proudctDetailPriceSpan">{Product.price&&(Product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span></div>
                        <div className="delivery"><span className="productDescriptionTitle">배송비 3,000원</span><br /><span className="deliverySub">(50,000원 이상 구매 시 무료)</span></div>
                        <div className="count"><span className="productDescriptionTitle">수량</span></div>
                        <div className="countButton">
                            <button type="button" onClick={addHandler}>+</button>
                            <input onChange={quantityHandler} style={{textAlign:'center'}} type="number" value={Quantity}/>
                            <button type="button" onClick={minusHandler}>-</button>
                        </div>
                        <Cart detail={Product} quantity={Quantity}/>
                        <div className="productDescriptionSubject"><span className="productDescriptionTitle">상세정보</span></div>
                        <div className="productDescription">{Product.description}</div>
                    </div>
                    <Description />
                    {/* <QandA /> */}
                </div>
            </div>
            <div className="product-detail-end"></div>
        </div>
    )
}

export default withRouter(DetailProductPage);
