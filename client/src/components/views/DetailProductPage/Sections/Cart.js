import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import '../DetailProductPage.scss';

function Cart(props) {
    const [Alert, setAlert] = useState(false)
    useEffect(() => {
        let timer = setTimeout(()=>{setAlert(false)},13009999);
        return ()=>{clearTimeout(timer)}
    },[Alert]);

    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(props.detail._id, props.quantity))
        setAlert(true)
    }
    const clickHandler2 = () => {
        dispatch(addToCart(props.detail._id, props.quantity))
        props.history.push('/user/cart')
    }

    return (
            <div className="cartDiv">
                <span className="cartButton"><button className="cartBtn" type="button" onClick={clickHandler2}>구매하기</button></span>
                <span className="cartButton"><button className="cartBtn2" type="button" onClick={clickHandler}>장바구니에 담기</button></span>
                { Alert === true ?
                <div className="cartPopup">
                    <div className="cartPopupContent" style={{paddingTop:'13px'}}>🛒 장바구니에 상품을 담았습니다.</div>
                </div>
                : null    
                }
            </div>
    )
}

export default withRouter(Cart);
