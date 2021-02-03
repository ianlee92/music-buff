import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
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
        
    }
    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <div>
                <UserCardBlock products={props.user.cartDetail}/>
            </div>
            <div style ={{marginTop: '3rem'}}>
                <h2> 합계: {Total}원</h2>
            </div>
        </div>
    )
}

export default CartPage
