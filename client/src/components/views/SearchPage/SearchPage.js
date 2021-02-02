import React, {useState} from 'react';
import SearchMenu from '../NavBar/Sections/SearchMenu';
import axios from 'axios';
import '../../Util/Card.scss';

function SearchPage() {
    const [Product, setProduct] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")
    const updateSearchTerm = (newSearchTerm) => {
        let body = {
            searchTerm: newSearchTerm
        }
        setSearchTerm(newSearchTerm)
        getProduct(body)
    }

    const getProduct = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if(response.data.success){
                    setProduct(response.data.productInfo)
                } else {
                    alert("상품들을 가져오는데 실패했습니다.")
                }
            })
    }

    console.log(SearchTerm)
    return (
        <div>
            <SearchMenu refreshFunction={updateSearchTerm}/>
            <div className="product-site-Wrap">
                {Product.map((product, index) => {
                    return <div className="productWrapper" key={index}>
                                <a className="productLink" href={`/goods/${product._id}`} alt="">
                                    <div className="thumbDiv">
                                        <div className="thumbImg">
                                            <img className="imgSize1" src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
                                        </div>
                                    </div>
                                    <div className="productInfo">
                                        <div className="productName">{product.title}</div>
                                        <div className="productPrice"><span className="proudctPriceSpan">{product.price}원</span></div>
                                    </div>
                                </a>
                            </div>
                })}
            </div>
            <div className="product-end"></div>
        </div>
    )
}

export default SearchPage
