import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)

    useEffect(() => {
        let cartItems = []

        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                .then(response => { calculateTotal(response.payload) })
            }
        }
    }, [props.user.userData])
    
    let calculateTotal = (cartDetail) => {
        let total = 0;
        
        cartDetail.map(item => {
            total += parseInt(item.price,10) * item.quantity
        })
        setTotal(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        setShowTotal(true)
    }

    let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then(response => {
            if(response.payload.productInfo.length <= 0) {
                setShowTotal(false)
            }
        })
    }

    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <div>
                <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} />
            </div>
            {ShowTotal ?
                <div style ={{marginTop: '3rem'}}>
                    <h2> 합계: {Total}원</h2>
                </div>
                :
                <div style={{textAlign:'center'}}>
                <br />
                <img src="https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1520407.jpg" alt="emptyimage" description={false} />
                </div>
            }
            
        </div>
    )
}

export default CartPage
