import React, {useState} from 'react';
import './UserCardBlock.scss';

function UserCardBlock(props) {

    const [Quantity, setQuantity] = useState("")
    
    const addHandler = () => {
        setQuantity(Quantity+1);
    }

    const minusHandler = () => {
        setQuantity(Quantity-1);
    }

    const quantityHandler = (event) => {
        setQuantity(event.currentTarget.value)
    }

    console.log(Quantity)
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
                    <div className="carCountButton">
                        <button type="button" onClick={addHandler}>+</button>
                        <input onChange={quantityHandler} style={{textAlign:'center'}} type="number" min='0' value={product.quantity}/>
                        <button type="button" onClick={minusHandler}>-</button>
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
