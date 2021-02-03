import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function Cart(props) {

    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(props.detail._id))
        props.history.push('/user/cart')
    }

    return (
            <div className="cartDiv">
                <span className="cartButton"><button className="cartBtn" type="button">구매하기</button></span>
                <span className="cartButton"><button className="cartBtn2" type="button" onClick={clickHandler}>장바구니에 담기</button></span>
            </div>
    )
}

export default withRouter(Cart);
