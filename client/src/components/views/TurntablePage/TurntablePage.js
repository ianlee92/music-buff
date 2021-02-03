import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../Util/Card.scss';

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

    return (
        <div style={{ width: '100%', textAlign: 'center'}}>
            <div className="product-start"></div>
            <div className="product-site-Wrap">
                {Product.filter(product =>(product.sort===4)).map((product, index) => {
                    return <div className="productWrapper" key={index}>
                                <a className="productLink" href={`/turntable/${product._id}`} alt="">
                                    <div className="thumbDiv">
                                        <div className="thumbImg">
                                            <img className="imgSize2" src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
                                        </div>
                                    </div>
                                    <div className="productInfo">
                                        <div className="productName">{product.title}</div>
                                        <div className="productPrice"><span className="proudctPriceSpan">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span></div>
                                    </div>
                                </a>
                            </div>
                })}
            </div>
            <div className="product-end"></div>
        </div>
    )
}

export default TurntablePage
