import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../Util/Card.scss';

function NewPage() {

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
            <div class="product-start"></div>
            <div class="product-site-Wrap">
                {Product.filter(product =>(product.sort===1)).map((product, index) => {
                    return <div class="productWrapper" key={index}>
                                <a class="productLink" href="#" alt="">
                                    <div class="thumbDiv">
                                        <div class="thumbImg">
                                            <img class="imgSize1" src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
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
            <div class="product-end"></div>
        </div>
    )
}

export default NewPage
