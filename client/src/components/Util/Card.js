import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import './Card.scss';
import axios from 'axios';

function Card() {
    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.post('/api/product/products')
            .then(response => {
                if(response.data.success){
                    setProduct(response.data.productInfo)
                } else {
                    alert("상품들을 가져오는데 실패 했습니다.")
                }
            })
    }, [])
   
    return (
        <div style={{ width: '100%', textAlign: 'center'}}>
            <div style={{ textAlign: 'center'}}>
            </div>
            <img src='https://contents.sixshop.com/thumbnails/uploadedFiles/27989/product/image_1608113497987_1000.jpg' />
            <br />
            <br />
            <div class="product-site-Wrap">
                {Product.filter(product =>(product.sort===6)).map((product, index) => {
                    return <div class="productWrapper" key={index}>
                                <a class="productLink" href="#" alt="">
                                    <div class="thumbDiv">
                                        <div class="thumbImg">
                                            <img src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
                                        </div>
                                    </div>
                                    <div class="productInfo">
                                        <div class="productName">{product.title}</div>
                                        <div class="productPrice"><span class="proudctPriceSpan">{product.price}원</span></div>
                                    </div>
                                </a>
                            </div>
                })}
            </div>
            <img src='https://contents.sixshop.com/thumbnails/uploadedFiles/27989/product/image_1608113497987_1000.jpg' />
        </div>
    )
}

export default withRouter(Card)
