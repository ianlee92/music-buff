import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem, increaseItem } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [DeliveryFee, setDeliveryFee] = useState(0)
    const [DeliveryTotal, setDeliveryTotal] = useState(0)
    const [DeliveryCondition, setDeliveryCondition] = useState(0)
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
        setDeliveryFee(total)
        setDeliveryTotal((total+3000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        setDeliveryCondition((50000-total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
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
    
    // let increaseCart = (productId) => {
    //     dispatch(increaseItem(productId))
    //     .then(response => {
            
    //         }
    //     )
    // }

    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <div>
                <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} />
            </div>
            {ShowTotal ?
                <div style ={{margin:'0 auto', maxWidth: '980px', position: 'relative', height:'100%', textAlign: 'right'}}>
                    {
                        DeliveryFee < 50000 ?
                        <div style={{fontSize:'12px', lineHeight:'1.2em', color:'#121111', fontFamily:'Arial, sans-serif', fontWeight:'500', letterSpacing:'0.01em' }}><br/><br/>{DeliveryCondition}원 추가 구매시 배송비 무료!<br/>(50,000원 이상 구매 시)<br/><h1>합계: {DeliveryTotal}원</h1></div>
                        : <h2> 합계: {Total}원</h2>
                    }
                    <br/>
                    <img src="https://file.mk.co.kr/meet/neds/2018/10/image_readtop_2018_613493_15384276623477538.jpg" style={{width:'150px', height:'60px', cursor:'pointer'}} alt="kakaopay"/>
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
