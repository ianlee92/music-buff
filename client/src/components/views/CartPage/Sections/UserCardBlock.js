import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './UserCardBlock.scss';
import { getCartItems } from '../../../../_actions/user_action';

function UserCardBlock(props) {

    const renderItems = () => (
        props.products && props.products.map((product, index) => (
            <tr key={index}>
                <td>
                    <a href={`/${product.kind}/${product._id}`}><img style={{width: '70px'}} alt="product"
                    src={product.images[0]} /></a>
                </td>
                <td>
                    <a href={`/${product.kind}/${product._id}`} style={{textDecoration:'none'}}>{product.title}</a>
                </td>
                <td>
                    <div className="cartCountButton">
                        {product.quantity} EA
                        {/* <button type="button" onClick={() => props.increaseCart(product._id)}>+</button> */}
                        {/* <input style={{textAlign:'center'}} type="number" min='0' value={product.quantity}/> */}
                        {/* <button type="button" onClick={minusHandler}>-</button> */}
                    </div>
                </td>
                <td>
                    {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
                </td>
                <td>
                    <button className="deleteButton" onClick={() => props.removeItem(product._id)}>
                        X
                    </button>
                </td>
            </tr>
        ))
    )
    
    

    return (
        <div className="cardBlock" style={{marginTop:'220px'}}>
            <h2>장바구니</h2>
            <table>
                <thead>
                    <tr>
                        <th>상품이미지</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
