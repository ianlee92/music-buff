import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem, increaseItem, onSuccessBuy } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';
import Paypal from '../../Util/Paypal';
function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [DeliveryFee, setDeliveryFee] = useState(0)
    const [DeliveryTotal, setDeliveryTotal] = useState(0)
    const [DeliveryCondition, setDeliveryCondition] = useState(0)
    const [FinalTotal, setFinalTotal] = useState(0)
    const [ShowSuccess, setShowSuccess] = useState(false)

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
        
        if(total&&total<50000){
            setFinalTotal((total+3000)/1000)
        } else {
            setFinalTotal(total/1000)
        }
        console.log(FinalTotal)

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

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
        .then(response => {
            if(response.payload.success){
                setShowTotal(false)
                setShowSuccess(true)
            }
        })
    }

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
                    
                    <Paypal total={FinalTotal}
                            onSuccess={transactionSuccess}/>
                </div>
                : ShowSuccess?
                    <div style={{textAlign:'center'}}>
                        <img src="https://freepikpsd.com/wp-content/uploads/2020/04/cart-png-Images-Free-Transparent.png" style={{width:'350px', height:'350px'}} alt="cartSuccess" /><br />
                        🎉 주문이 성공적으로 완료되었습니다.
                    </div>

                : <div style={{textAlign:'center'}}>
                <br />
                <img src="https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1520407.jpg" alt="emptyimage" description={false} />
                </div>
            }
        </div>
    )
}

export default CartPage
