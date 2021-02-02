import React from 'react';
import './UserCardBlock.scss';

function UserCardBlock(props) {
    
    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr>
                <td>
                    <img style={{width: '70px'}} alt="product"
                    src={product.images} />
                </td>
                <td>
                    {product.quantity} EA
                </td>
                <td>
                    {product.price} 원
                </td>
                <td>
                    <button>
                        Remove
                    </button>
                </td>
            </tr>
        ))
    )

    return (
        <div className="cardBlock">
            <table>
                <thead>
                    <tr>
                        <th>상품 이미지</th>
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
