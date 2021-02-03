import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        let cartItems = []

        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }
    }, [props.user.userData])
    
    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <div>
                <UserCardBlock products={props.user.cartDetail}/>
            </div>
            
        </div>
    )
}

export default CartPage
