import React, {useEffect, useState} from 'react';
import axios from "axios";

function TurntablePage() {
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

    const renderCards = Product.map((product, index) => {
        return <div class="productWrapper" key={index}>
                    <a href="#" alt="">
                        <div class="thumbDiv">
                            <div class="thumb img">
                                <img src={product.images[0]} style={{width:'300px', hieght:'500px'}} />
                            </div>
                        </div>
                        <div class="productInfo">
                            <div class="productName">{product.title}</div>
                            <div class="productPrice"><span class="proudctPriceSpan">{product.price}원</span></div>
                        </div>
                    </a>
                </div>
    })

    return (
        <div style={{ width: '100%', textAlign: 'center'}}>
            <div style={{ textAlign: 'center'}}>
            </div>
            <img src='https://contents.sixshop.com/thumbnails/uploadedFiles/27989/product/image_1608113497987_1000.jpg' />
            <br />
            <br />
            {renderCards}
            <img src='https://contents.sixshop.com/thumbnails/uploadedFiles/27989/product/image_1608113497987_1000.jpg' />
        </div>
    )
}

export default TurntablePage
