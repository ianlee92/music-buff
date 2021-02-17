import React, {useState, useEffect} from 'react';
import CarouselPage from './Sections/CarouselPage';
import "./LandingPage.scss";
import axios from 'axios';

function LandingPage(props) {
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
    const clickHandler = () => {
        props.history.push('/new')
    }
    const clickHandler2 = () => {
        props.history.push('/magazine')
    }

    return (
        <div className="landing-division-background" style={{ width:'100%', margin: '3rem auto'}}>
            <div className="column-landing-left"></div>
            <div className="column-landing-center" style={{textAlign:'center'}}>
            <CarouselPage/>
            <div className="fixed01"></div>
                <div className="contents01">
                    <h1 className="h1font" style={{marginBottom:'0px'}}>N E W</h1>
                    {Product.filter(product =>(product.views===1)).map((product, index) => {
                        return <div className="productWrapper" key={index} style={{marginTop:'10px'}}>
                                    <a className="productLink" href={`/goods/${product._id}`} alt="">
                                        <div className="thumbDiv">
                                            <div className="thumbImg">
                                                <img className="imgSize1" src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
                                            </div>
                                        </div>
                                        <div className="productInfo" style={{marginTop:'10px'}}>
                                            <div className="productName">{product.title}</div>
                                            <div className="productPrice"><span className="proudctPriceSpan">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span></div>
                                        </div>
                                    </a>
                                </div>
                    })}
                <span className="cartButton"><button className="cartBtn2" type="button" onClick={clickHandler}>상품 더 보기</button></span>
                </div>
                
                <div className="fixed02"></div>
                <div className="contents02">
                <h1 className="h1font" style={{marginBottom:'0px'}}>M A G A Z I N E</h1>
                    {Product.filter(product =>(product.views===2)).map((product, index) => {
                        return <div className="productWrapper" key={index} style={{marginTop:'10px'}}>
                                    <a className="productLink" href={`/goods/${product._id}`} alt="">
                                        <div className="thumbDiv">
                                            <div className="thumbImg">
                                                <img className="imgSize1" src={product.images[0]} style={{width:'300px', hieght:'300px'}} />
                                            </div>
                                        </div>
                                        <div className="productInfo" style={{marginTop:'10px'}}>
                                            <div className="productName">{product.title}</div>
                                            <div className="productPrice"><span className="proudctPriceSpan">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span></div>
                                        </div>
                                    </a>
                                </div>
                    })}
                    <span className="cartButton"><button className="cartBtn2" type="button" onClick={clickHandler2}>상품 더 보기</button></span>
                </div>
                <div className="fixed03"></div>
                
            </div>
            <div className="column-landing-right"></div>
        </div>
    )
}

export default LandingPage